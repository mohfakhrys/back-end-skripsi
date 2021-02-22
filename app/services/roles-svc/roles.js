const Boom = require('boom');
const {logger} =require('../../lib/report');
const postgresPool = require('../../lib/database/postgrest').pool;
const Roles = require('../../database/models/roles').Roles
const { getRepository } = require('typeorm');
// const roleRepository = getRepository(Roles)

const TAG = 'server.services.roles'
// const roleRepository = getRepository(Roles)

async function getAllRoleExist() {
    logger.info(TAG, 'getAllRoleExist begin')
    const result = await getRepository(Roles).find()
    console.log(result);
    return result
}

async function createNewRole(roleName) {
    logger.info(TAG, 'getAllRoleExist begin')
    
    const create = await getRepository(Roles).save()
}

async function getRoleDetails(idRole) {
    try {
        
    } catch (error) {
        
    }
    
}

module.exports=[
    {
        name: 'services.auth.getRoles',
        method: getAllRoleExist
    },
    {
        name:'service.auth.createRoles',
        method: createNewRole
    },
    {
        name:'service.auth.roleDetail',
        method: getRoleDetails
    }
]