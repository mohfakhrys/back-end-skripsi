'use strict';

const { EntitySchema } = require('typeorm');
const TicketChange = require('../models/ticket-change').TicketChange;

const ticketChangeSchema = new EntitySchema({
  name: 'ticket-change',
  tableName: 'ticket_change',
  target: TicketChange,
  columns: {
    
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
