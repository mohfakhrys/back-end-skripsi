class Users{
    constructor(id, fistName, lastName, email, password, createdAt, updateAt, deleteAt){
        this.id = id,
        this.fistName=fistName,
        this.lastName=lastName,
        this.email=email,
        this.password=password,
        this.createdAt = createdAt,
        this.updateAt=updateAt,
        this.deleteAt=deleteAt
    }
}

module.exports={
    Users: Users
}