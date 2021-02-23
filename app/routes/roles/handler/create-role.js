const {logger} =require('../../../lib/report')
async function handler(req, h) {
  const {id, role_name} =req.payload
  logger.debug(id,role_name);
  const postRole  = await req.server.methods.service.auth.createRoles(id, role_name)
  return {data: postRole}  
}
  
module.exports = handler
