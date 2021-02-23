const Boom = require('boom');
const {logger} =require('../../lib/report');
const Roles = require('../../database/models/roles').Roles
const { getRepository } = require('typeorm');

const TAG = 'server.services.roles'

async function getAllRoleExist() {
    logger.info(TAG, 'getAllRoleExist begin')
    const result = await getRepository(Roles).find()
    return result
}

async function createNewRole(id, roleName) {
    logger.info(TAG, 'getAllRoleExist begin', {id, roleName})
    const roleNameExist = await getRoleName(roleName)
    if(roleNameExist){
        throw Boom.badData(roleName+ ' alredy exist')
    }

    // console.log(roleId);
    return await getRepository(Roles).save({
        id:id,
        roleName:roleName
    })

}

async function getRoleName(roleName) {
    logger.info(TAG, 'getRoleName begin', roleName)
    const name = await getRepository(Roles).findOne({roleName:roleName})
    return name
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
        name:'service.auth.getRoleDetails',
        method: getRoleDetails
    },
    {
        name:'service.auth.getRoleName',
        method: getRoleName
    }
]