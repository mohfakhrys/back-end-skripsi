const { logger } = require('../../../lib/report')
async function handler(req, h) {
    const { nasabahName, complain } = req.query
    logger.debug(nasabahName, complain);
    return await req.server.methods.server.ticke.createTiketByNasabah(nasabahName, complain)
}

module.exports = handler
