const {logger} =require('../../../lib/report')
async function handler(req, h) {
    const {userName, password} = req.payload
    // logger.info(userName, password)
    console.log(userName, password);
    let a =  await req.server.methods.service.users.login(userName, password)
    return a
}

module.exports = handler
