'use strict';
class Nasabah {
    constructor(id, rekening, nasabahName, nomerHp, alamat, kodeCabang, nomorKtp, createdAt, updateAt, deleteAt) {
        this.id = id,
            this.rekening = rekening,
            this.nasabahName = nasabahName,
            this.alamat = alamat,
            this.nomerHp = nomerHp,
            this.nomorKtp = nomorKtp,
            this.kodeCabang = kodeCabang,
            this.createdAt = createdAt,
            this.updateAt = updateAt,
            this.deleteAt = deleteAt
    }
}

module.exports = {
    Nasabah: Nasabah
}
