const {logger} =require('../../../lib/report')
async function handler(req, h) {
  const {role_name} =req.payload
  logger.debug(role_name);
  const postRole  = await req.server.methods.service.auth.createRoles(role_name)
  return {data: postRole}  
}
  
module.exports = handler
