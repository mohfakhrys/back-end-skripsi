'use strict';
class Roles{
    constructor(id, roleName, createdAt, updateAt, deleteAt){
        this.id = id,
        this.roleName=roleName,
        this.createdAt = createdAt,
        this.updateAt=updateAt,
        this.deleteAt=deleteAt
    }
}

module.exports={
    Roles: Roles
}