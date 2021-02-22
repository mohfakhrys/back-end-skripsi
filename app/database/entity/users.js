'use strict';

const { EntitySchema } =require ('typeorm');
const Users = require('../models/users').Users ;
// const Roles = require('../models/roles').Roles

const userSchema = new EntitySchema({
    name: 'users',
    tableName: 'users',
    target: Users,
    columns: {
        id: {
            type: 'varchar',
            unique: true,
            generated: 'uuid',
            nullable: false,
            primary: true,
        },
        userName:{
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        firstName: {
            type: 'varchar',
            length: 100,
        },
        lastName: {
            type: 'varchar',
            length: 100,
        },
        email: {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        password: {
            type: 'varchar',
            length: 100,
            nullable: false
        },
        userRole: {
            type: 'varchar',
            length: 100,
            nullable: false
        },
        createdAt: {
            name: 'created_at',
            type: 'timestamp',
            nullable: false,
            default: () => 'CURRENT_TIMESTAMP',
          },
        updateAt: {
            name: 'update_at',
            type: 'timestamp',
            nullable: false,
            default: () => 'CURRENT_TIMESTAMP',
          },
        deleteAt: {
            name: 'delete_at',
            type: 'timestamp',
            nullable: false,
            default: () => 'CURRENT_TIMESTAMP',
          },
    },
    // relations:{
    //     role: {
    //         target: "user_role",
    //         type: 'many-to-one',
    //         joinTable: true,
    //         inverseSide: 'sender',
    //         eager: true,
    //         cascade: true
    //     },
    // }
});

module.exports= userSchema