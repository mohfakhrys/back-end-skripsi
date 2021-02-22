const {logger} =require('../../../lib/report')
async function handler(req, h) {
    const TAG = 'handler get users'
    const {limit, offset, userName, firstName, lastName,email} = req.query
    logger.debug(TAG, limit, offset, userName, firstName, lastName,email)
    const getUsersData  = await req.server.methods.service.users.getAllUsers({limit, offset, userName, firstName, lastName,email})
    return { data: getUsersData }  
}
  
module.exports = handler
