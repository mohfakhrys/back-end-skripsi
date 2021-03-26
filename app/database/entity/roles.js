'use strict';

const {  EntitySchema } =require('typeorm')
const { NextVal, EntityWithSequence } =require('typeorm-sequence')

const Roles = require('../models/roles').Roles

const roleSchema = new EntitySchema({
  name: 'user_role',
  tableName: 'user_role',
  target:Roles,
  columns: {
    id: {
      primary: true,
      type: 'varchar',
      nullable: false,
    },
    roleName: {
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

module.exports= roleSchema
