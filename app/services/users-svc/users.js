'use strict';

const Boom = require('boom');
const { logger } = require('../../lib/report');
const Users = require('../../database/models/users').Users
const Nasabah = require('../../database/models/nasabah').Nasabah
const { getRepository, QueryBuilder } = require('typeorm');
const jwt = require('jsonwebtoken');
const { tlsOptions } = require('../../../config')
const bcrypt = require('bcryptjs')

const TAG = 'server.services.users'
const saltRounds = 10;


async function getAllUsers() {
    logger.info(TAG, 'getAllUsers begin', )
    let data = await getRepository(Users).find({take:0, skip:0})
    console.log({data})
    return data
}

async function beforeCreatePassword(password) {
    logger.info(TAG, 'beforeCreate begin')
    const salt = bcrypt.genSaltSync(saltRounds);
    return await bcrypt.hashSync(password, salt);
}

async function login(userName, password) {
    logger.info(TAG, 'login begin', { userName, password })

    const existUserName = await findByUsername(userName)
    if (!existUserName) {
        console.log('masuk kondisi gak ada uang', { existUserName });
        throw Boom.badData(existUserName, ' dosnt exist')
    }
    console.log(existUserName.userRoles)
    let passwordExisting = await validPassword(password, existUserName.password)
    if (!passwordExisting) {
        throw Boom.unauthorized('password gak bener',)
    }
    let privateKey = tlsOptions.private
    console.log(privateKey)
    
    const iat = Math.floor(Date.now() / 1000) - 30
    const exp = Math.floor(Date.now() / 1000) + (60 * 60)
    console.log(iat, exp);

    var toket = jwt.sign({ username:existUserName.userName, role:existUserName.userRoles,
        id:existUserName.id, email:existUserName.email, 
        full_name:existUserName.fullName, iat: iat, exp: exp }, 
        privateKey, { algorithm: 'RS512' },'sssssssh');

    console.log(toket);
    return { credentials: toket, messaage: '' }
}

async function validPassword(password, checkPassword) {
    logger.debug(TAG, '')
    console.log('masuk sini', password, checkPassword)
    return await bcrypt.compareSync(password, checkPassword);
}

async function changePassword(userName, email, password, newPassword) {
    logger.info(TAG, 'changePassword begin', { userName, email, password, newPassword })

    let usernameExist = await findByUsername(userName)
    if (!usernameExist) {
        throw Boom.badData(userName + ' dosnt exist')
    }
    let emailExist = await findByEmail(email)
    if (!emailExist) {
        throw Boom.badData(email + ' dosnt exist')
    }

    const match = await bcrypt.compare(password, newPassword);
}
async function getRoleUsre(username) {

}
async function findByUsername(userName) {
    logger.info(TAG+'.findByUsername begin', userName)
    const userExist = await getRepository(Users).findOne({ userName: userName })
    return userExist
}

async function findByEmail(email) {
    logger.info(TAG+'.findByEmail begin', email)
    const emailExist = await getRepository(Users).findOne({ email: email })
    return emailExist
}
async function findUserByRekening(rekening) {
    logger.info(TAG+'.findUserByRekening begin', rekening)
    const rekeningExisting = await getRepository(Users).findOne({rekening:rekening})
    return rekeningExisting
}

async function getRekening(rekening) {
    logger.info(TAG, 'beforeCreate begin')
    const rekeningExisting = await getRepository(Nasabah).findOne({ rekening:rekening })
    return rekeningExisting
}
async function createUser(userName, fullName, rekening, email, password, userRoles) {
    logger.info(TAG, 'findByEmail begin', { userName, fullName, rekening, email, password, userRoles })
    let usernameExist = await findByUsername(userName)
    let emailExist = await findByEmail(email)
    let rekeningExisting = await findUserByRekening(rekening)
    let rekeingFromNasabah = await getRekening(rekening)
    if(!rekeingFromNasabah){
        throw Boom.badRequest('rekening tidak ada')
    }
    if (usernameExist) {
        throw Boom.badData('userName alredy exist')
    }
    if (emailExist) {
        throw Boom.badData('email alredy exist')
    }
    if(rekeningExisting){
        throw Boom.badData('rekening alredy exist')
    }
    
    let passrodEncript = await beforeCreatePassword(password)
    console.log(passrodEncript);
    const data = { userName, fullName, rekening, email, password: passrodEncript, userRoles }
    return await getRepository(Users).save(data)
}

// async function getAllUsers({ limit, offset, userName, firstName, lastName, email }) {
//     logger.info(TAG, 'getAllUsers Begin')
//     logger.info(TAG, { limit, offset, userName, firstName, lastName, email })
//     console.log({ limit, offset, userName, firstName, lastName, email });

//     limit = limit < 1 ? 1 : limit
//     limit = limit > 100 ? 100 : limit

//     const data = await postgresPool.query(
//         `SELECT id, username from users`
//     )

//     console.log(data);
//     return data.rows
// }

module.exports = [
    {
        name: 'service.users.createUser',
        method: createUser
    },
    {
        name: 'service.users.getAllUsers',
        method: getAllUsers
    },
    {
        name: 'service.users.login',
        method: login
    }
]
