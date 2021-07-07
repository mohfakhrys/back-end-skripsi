'use strict';

const {  EntitySchema } =require('typeorm')

const Nasabah = require('../models/nasabah').Nasabah

const nasabahSchema = new EntitySchema({
  name: 'nasabah',
  tableName: 'nasabah',
  target:Nasabah,
  columns: {
    id: {
      primary: true,
      type: 'varchar',
      nullable: false,
    },
    nasabahName: {
      type: 'varchar',
      nullable: false,
      length: 100,
    },
    nomerHp: {
        type: 'varchar',
        nullable: true,
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

module.exports= nasabahSchema
