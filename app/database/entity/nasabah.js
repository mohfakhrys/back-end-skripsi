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
    },
    nomerHp: {
        type: 'varchar',
        nullable: true,
    },
    rekening:{
      type: 'varchar',
      nullable: true,
    },
    alamat:{
      type: 'varchar',
      nullable: true,
    },
    kodeCabang:{
      type: 'varchar',
      nullable: true,
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
