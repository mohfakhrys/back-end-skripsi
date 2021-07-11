'use strict';

const { EntitySchema } = require('typeorm')
const Categoty = require('../models/category').Categoty

const roleSchema = new EntitySchema({
    name: 'category',
    tableName: 'category',
    target: Categoty,
    columns: {
        id: {
            primary: true,
            type: 'varchar',
            nullable: false,
        },
        categotyName: {
            type: 'varchar',
            nullable: false,
            length: 100,
        },
        createdAt: {
            name: 'created_at',
            type: 'date',
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
})

module.exports = roleSchema
