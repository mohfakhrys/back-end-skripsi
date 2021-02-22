'use strict';

const { EntitySchema } =require ('typeorm');
const Users = require('../models/users').Users ;

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
        fistName: {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        lastName: {
            type: 'varchar',
            length: 100,
            nullable: false,
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
        createdAt: {
            name: 'created_at',
            type: 'date',
            nullable: false,
            default: () => 'CURRENT_TIMESTAMP',
          },
        updateAt: {
            name: 'update_at',
            type: 'date',
            nullable: false,
            default: () => 'CURRENT_TIMESTAMP',
          },
        deleteAt: {
            name: 'delete_at',
            type: 'date',
            nullable: false,
            default: () => 'CURRENT_TIMESTAMP',
          },
    },
    // relations:{
    //     sender: {
    //         target: 'Customer',
    //         type: 'many-to-one',
    //         joinTable: true,
    //         inverseSide: 'sender',
    //         eager: true
    //     },
    //     receiver: {
    //         target: 'Customer',
    //         type: 'many-to-one',
    //         joinTable: true,
    //         inverseSide: 'receiver',
    //         eager: true
    //     }
    // }
});

module.exports= userSchema