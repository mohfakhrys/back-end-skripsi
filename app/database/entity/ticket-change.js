'use strict';

const { EntitySchema } = require('typeorm');
const TicketChange = require('../models/ticket-change').TicketChange;

const ticketChangeSchema = new EntitySchema({
  name: 'ticket-change',
  tableName: 'ticket_change',
  target: TicketChange,
  columns: {
    idChange: {
      type: 'int',
      generated: 'serial',
      primary: true,
      unique: true,
      nullable: false,
    },
    penjelasan: {
      type: 'varchar',
      nullable: true,
    },
    keterangan: {
      type: 'varchar',
      nullable: true,
    }, idUsers: {
      type: 'varchar',
      nullable: true,
    },
    idTiket: {
      type: 'varchar',
      nullable: true,
    },
    tanggalSelesai: {
      type: 'varchar',
      nullable: true,
    },
    tanggalRequest: {
      type: 'varchar',
      nullable: true,
    },
    statusChange: {
      type: 'varchar',
      nullable: true,
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
});

module.exports = ticketChangeSchema
