const {logger} =require('../../../lib/report')
async function handler(req, h) {
  logger.info('assssssss')
  const getRoleData  = await req.server.methods.services.auth.getRoles() 
    return {data: getRoleData}  
}
  
module.exports = handler
