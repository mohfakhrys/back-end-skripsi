// const TAG = "server.api.loan-application.image-ektp-thumbnail"

async function handler(req, h) {
    const { id } = req.params
    const imagePath = await req.server.methods.server.ticket.thumbnail(id)
    //Returning file
    req.logger.info( "success returning file")
    return h.file(imagePath, { confine: false })
}

module.exports = handler
