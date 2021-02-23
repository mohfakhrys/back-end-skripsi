const {logger} =require('../../../lib/report')
async function handler(req, h) {
  const TAG = 'hanlder create user'
  const {userName, firstName, lastName,email, password, userRoles } =req.payload
  logger.debug(TAG,{userName, firstName, lastName,email, password, userRoles});
  const {statusCode} = await req.server.methods.service.users.createUser(userName, firstName, lastName,email, password, userRoles)
  logger.debug(statusCode)
  return h.response().code(201)
}
  
module.exports = handler
