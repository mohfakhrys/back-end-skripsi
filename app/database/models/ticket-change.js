'use strict';

class TicketChange {
    constructor(idChange, penjelasan, keterangan, idUsers, idTiket, tanggalSelesai,
        tanggalRequest, statusChange,
        createdAt, updateAt, deleteAt) {
            this.idChange = idChange,
            this.penjelasan = penjelasan,
            this.keterangan = keterangan,
            this.idUsers = idUsers,
            this.idTiket = idTiket,
            this.tanggalSelesai = tanggalSelesai,
            this.tanggalRequest = tanggalRequest,
            this.statusChange = statusChange,
            this.createdAt = createdAt,
            this.updateAt = updateAt,
            this.deleteAt = deleteAt
    }
}

module.exports = {
    TicketChange: TicketChange
}
