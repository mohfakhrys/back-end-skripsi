const { logger } = require('../../../lib/report')
const config = require('../../../../config')

async function handler(req, h) {
    const { nasabahName, complain, image } = req.payload
    // console.log('ini reques', { nasabahName, complain, image })
    // logger.debug(nasabahName, complain, image);
    // const { ektp, ektp_thumbnail } = req.payload
    const fileOptions = {
        dest: `${config.uploadDestination}/`,
        fileFilter: config.imageFilter
    }
    const imageDetail = await req.server.methods.services.files.uploader(image, fileOptions)
    return imageDetail
    // return await req.server.methods.server.ticke.createTiketByNasabah(nasabahName, complain)
}

module.exports = handler
