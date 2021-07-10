'use strict';
class Users {
    constructor(id, userName, fullName, rekening, email, password, userRoles, createdAt, updateAt, deleteAt) {
        this.id = id,
            this.userName = userName,
            this.fullName = fullName,
            this.rekening = rekening,
            this.email = email,
            this.password = password,
            this.userRoles = userRoles,
            this.createdAt = createdAt,
            this.updateAt = updateAt,
            this.deleteAt = deleteAt
    }
}

module.exports = {
    Users: Users
}
