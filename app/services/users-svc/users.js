const Boom = require('boom');
const {logger} =require('../../lib/report');
const Users = require('../../database/models/roles').Users
const { getRepository } = require('typeorm');
const bcrypt =require('bcrypt')
// const roleRepository = getRepository(Roles)

const TAG = 'server.services.users'
const saltRounds = 10;

async function beforeCreate(password) {
    logger.info(TAG, 'beforeCreate begin', password)
    const salt = bcrypt.genSaltSync(saltRounds);
    return await bcrypt.hashSync(password, salt);
}
async function findByUsername(username) {
    logger.info(TAG, 'findByUsername begin', username)
    const userExist = await getRepository(Users).findOne({username:username})
    return userExist    
}
async function findByEmail(email) {
    logger.info(TAG, 'findByEmail begin', email)
    const emailExist = await getRepository(Users).findOne({email:email})
    return emailExist
}
async function createUser() {
    
}



module.exports=[
    {
        name:'service.auth.createUser',
        method: createUser
    },
]