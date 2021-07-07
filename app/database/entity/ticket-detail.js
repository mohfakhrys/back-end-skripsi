'use strict';

const { EntitySchema } =require ('typeorm');
const TicketDetail = require('../models/ticket-detail').TicketDetail ;

const ticketDetailSchema = new EntitySchema({
    name: 'ticket-detail',
    tableName: 'ticket_detail',
    target: TicketDetail,
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

module.exports= ticketDetailSchema
