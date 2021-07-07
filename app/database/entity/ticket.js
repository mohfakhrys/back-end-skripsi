'use strict';

const { EntitySchema, PrimaryGeneratedColumn } = require ('typeorm');
const Ticket = require('../models/ticket').Ticket ;

const ticketSchema = new EntitySchema({
    name: 'ticket',
    tableName: 'ticket',
    target: Ticket,
    columns: {
        idTicket:{
            type: 'int',
            generated: 'serial',
            primary: true,
            unique: true,
            nullable: false,
        },
        complain:{
            type: 'text',
            nullable: false,
            // length: 100,
        }, 
        sla:{
            type: 'varchar',
            // nullable: true,
            length: 100,
        }, 
        statusTicket:{
            type: 'varchar',
            // nullable: false,
            length: 100,
        }, 
        kategoryTicket:{
            type: 'varchar',
            nullable: true,
            length: 100,
        },
        idNasabah:{
            type: 'varchar',
            nullable: false,
            length: 100,
        }, 
        lampiran:{
            type: 'varchar',
            nullable: true,
            // length: 100,
        }, 
        lampiranJawaban:{
            type: 'varchar',
            nullable: true,
            length: 100,
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

module.exports= ticketSchema
