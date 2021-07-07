'use strict';
class Nasabah{
    constructor(id, nasabahName, nomerHp, createdAt, updateAt, deleteAt){
        this.id = id,
        this.nasabahName=nasabahName,
        this.nomerHp=nomerHp,
        this.createdAt=createdAt,
        this.updateAt=updateAt,
        this.deleteAt=deleteAt
    }
}

module.exports={
    Nasabah: Nasabah
}
