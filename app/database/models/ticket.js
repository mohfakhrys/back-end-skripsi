'use strict';
class Ticket{
    constructor(idTiket, komplain,  status, idKategory,
        idNasabah, lampiran, tanggalSelesai, jawaban,
        createdAt, updateAt, deleteAt){
        this.idTiket = idTiket,
        this.komplain=komplain,
        this.status=status,
        this.idKategory=idKategory,
        this.idNasabah=idNasabah,
        this.lampiran=lampiran,
        this.tanggalSelesai=tanggalSelesai,
        this.jawaban=jawaban,
        this.createdAt = createdAt,
        this.updateAt=updateAt,
        this.deleteAt=deleteAt
    }
}

module.exports={
    Ticket: Ticket
}
