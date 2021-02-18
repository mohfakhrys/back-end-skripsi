const Boom = require('boom')
const {logger} =require('../../lib/report')

const TAG = 'server.services.roles'
async function getAllRoleExist() {
    logger.info(TAG, 'ini di mulai')
    try {
        return `Hello ${request.params.name}!`;
        // console.log('masuk service lo');
    } catch (error) {
        const { statusCode } = error
        if (statusCode && statusCode === 401) { 
            throw Boom.unauthorized('Cant get roles') 
        }
        logger.error(TAG, 'Get Role error catch', { error })
            throw Boom.gatewayTimeout()
    }
}

module.exports=[
    {
        name: 'services.auth.getRoles',
        method: getAllRoleExist
    }
]