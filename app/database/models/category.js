'use strict';
class Categoty{
    constructor(id, categotyName, createdAt, updateAt, deleteAt){
        this.id = id,
        this.categotyName=categotyName,
        this.createdAt = createdAt,
        this.updateAt=updateAt,
        this.deleteAt=deleteAt
    }
}

module.exports={
    Categoty: Categoty
}
