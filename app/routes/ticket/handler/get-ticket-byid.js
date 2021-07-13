// const TAG = "server.api.loan-application.image-ektp-thumbnail"

async function handler(req, h) {
    const { id } = req.params
    return await req.server.methods.server.ticket.getTicketById(id)
    // return h.file(imagePath, { confine: false })
}

module.exports = handler
