const {logger} =require('../../../lib/report')
async function handler(req, h) {
  const getRoleData  = await req.server.methods.services.auth.getRoles() 
    return {data: getRoleData}  
}
  
module.exports = handler
