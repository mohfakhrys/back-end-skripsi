const Boom = require('boom');
const {logger} =require('../../lib/report');
const Users = require('../../database/models/users').Users
const postgresPool = require('../../lib/database/postgrest').pool;
const { getRepository } = require('typeorm');

const bcrypt =require('bcrypt')

const TAG = 'server.services.users'
const saltRounds = 10;

async function beforeCreate(password) {
    logger.info(TAG, 'beforeCreate begin', password)
    const salt = bcrypt.genSaltSync(saltRounds);
    return await bcrypt.hashSync(password, salt);
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

async function createUser(userName, firstName, lastName, email, password ) {
    logger.info(TAG, 'findByEmail begin', {userName, firstName, lastName, email, password})
    let usernameExist = await findByUsername(userName)
    let emailExist = await findByEmail(email)
    if(usernameExist){
        throw Boom.badData(userName+ ' alredy exist')
    }
    if(emailExist){
        throw Boom.badData(email+ ' alredy exist')
    }
    let passrodEncript = await beforeCreate(password)
    console.log(passrodEncript);
    const data = {userName, firstName, lastName, email, password:passrodEncript}
    return await getRepository(Users).save(data)
}

async function validPassword(password, checkPassword) {
    return await bcrypt.compareSync(password, checkPassword);
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
    }
]