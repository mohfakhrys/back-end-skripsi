class Users{
    constructor(id, userName, firstName, lastName, email, password, createdAt, updateAt, deleteAt, user_role){
        this.id = id,
        this.userName=userName,
        this.firstName=firstName,
        this.lastName=lastName,
        this.email=email,
        this.password=password,
        this.createdAt = createdAt,
        this.updateAt=updateAt,
        this.deleteAt=deleteAt,
        this.user_role=user_role
    }
}

module.exports={
    Users: Users
}