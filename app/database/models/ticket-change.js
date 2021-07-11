'use strict';

class TicketChange {
    constructor(idTicketDetail, idTicket, complain, sla, statusTicket, kategoryTicket,
        idNasabah, lampiran, lampiranJawaban, penjelasan,
        createdAt, updateAt, deleteAt) {
        this.idTicketDetail = idTicketDetail,
            this.idTicket = idTicket,
            this.complain = complain,
            this.sla = sla,
            this.statusTicket = statusTicket,
            this.kategoryTicket = kategoryTicket,
            this.idNasabah = idNasabah,
            this.lampiran = lampiran,
            this.lampiranJawaban = lampiranJawaban,
            this.penjelasan = penjelasan,
            this.createdAt = createdAt,
            this.updateAt = updateAt,
            this.deleteAt = deleteAt
    }
}

module.exports = {
    TicketChange: TicketChange
}
