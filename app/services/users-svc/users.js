'use strict';

const Boom = require('boom');
const {logger} =require('../../lib/report');
const Users = require('../../database/models/users').Users
const { getRepository } = require('typeorm');
const jwt = require('jsonwebtoken');
const {tlsOptions} = require('../../../config')
const bcrypt =require('bcrypt')

const TAG = 'server.services.users'
const saltRounds = 10;

async function beforeCreatePassword(password) {
    logger.info(TAG, 'beforeCreate begin')
    const salt = bcrypt.genSaltSync(saltRounds);
    return await bcrypt.hashSync(password, salt);
}

async function login(userName, password) {
    logger.info(TAG, 'login begin', {userName, password})

    const existUserName = await findByUsername(userName)
    if(!existUserName){
        console.log('masuk kondisi gak ada uang', {existUserName});
        throw Boom.badData('userName dosnt exist')
    }

    let asuPassword = await validPassword(password, existUserName.password)
    if(!asuPassword){
        console.log(existUserName.password);
        // throw Boom.badData('password y gak bener', existUserName.password)
    }
    let asu = tlsOptions.private
    let payload = existUserName.userName
    const iat = Math.floor(Date.now() / 1000) - 30 
    const exp = Math.floor(Date.now() / 1000) + (60 * 60)
    console.log(iat, exp);

    var toket = jwt.sign({ payload, iat: iat, exp:exp}, asu, { algorithm: 'HS256'});

    console.log(toket);
    return { credentials: toket, messaage:''}
    //{asuPassword, existUserName}

}

async function validPassword(password, checkPassword) {
    return await bcrypt.compareSync(password, checkPassword);
}

async function changePassword(userName, email, password, newPassword) {
    logger.info(TAG, 'changePassword begin', {userName, email, password, newPassword})
    
    let usernameExist = await findByUsername(userName)
    if(!usernameExist){
        throw Boom.badData(userName+ ' dosnt exist')
    }
    let emailExist = await findByEmail(email)
    if(!emailExist){
        throw Boom.badData(email+ ' dosnt exist')
    }

    const match = await bcrypt.compare(password, newPassword);
}
async function getRoleUsre(username) {
    
}
async function findByUsername(userName) {
    logger.info(TAG, 'findByUsername begin', userName)
    const userExist = await getRepository(Users).findOne({userName:userName})
    return userExist    
}

async function findByEmail(email) {
    logger.info(TAG, 'findByEmail begin', email)
    const emailExist = await getRepository(Users).findOne({email:email})
    return emailExist
}

async function createUser(userName, firstName, lastName, email, password, userRoles ) {
    logger.info(TAG, 'findByEmail begin', {userName, firstName, lastName, email, password, userRoles})
    let usernameExist = await findByUsername(userName)
    let emailExist = await findByEmail(email)
    if(usernameExist){
        throw Boom.badData(userName+ ' alredy exist')
    }
    if(emailExist){
        throw Boom.badData(email+ ' alredy exist')
    }
    let passrodEncript = await beforeCreatePassword(password)
    console.log(passrodEncript);
    const data = {userName, firstName, lastName, email, password:passrodEncript, userRoles}
    return await getRepository(Users).save(data)
}

async function getAllUsers({limit, offset, userName, firstName, lastName, email}) {
    logger.info(TAG, 'getAllUsers Begin')
    logger.info(TAG, {limit, offset, userName, firstName, lastName, email})
    console.log({limit, offset, userName, firstName, lastName, email});

    limit = limit < 1 ? 1 : limit
    limit = limit > 100 ? 100 : limit

    const data = await postgresPool.query(
        `SELECT id, username from users`
    )
    
    console.log(data);
    return data.rows
}


module.exports=[
    {
        name:'service.users.createUser',
        method: createUser
    },
    {
        name:'service.users.getAllUsers',
        method: getAllUsers
    },
    {
        name:'service.users.login',
        method:login
    }
]
