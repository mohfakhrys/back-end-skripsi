const config = require('../../../../config')
async function handler(req, h) {
    const {image } = req.payload
    // console.log('ini reques', { nasabahName, complain, image })
    // logger.debug(nasabahName, complain, image);
    // const { ektp, ektp_thumbnail } = req.payload
    const fileOptions = {
        dest: `${config.uploadDestination}/`,
        fileFilter: config.imageFilter
    }
    const imageDetail = await req.server.methods.services.files.uploader(image, fileOptions)
    console.log('image path y ini',imageDetail)
    const {idNasabah, complain,idKategoty} = req.payload
    return await req.server.methods.server.ticke.createTiketByNasabah(idNasabah, complain,idKategoty, imageDetail.path )
}

module.exports = handler
