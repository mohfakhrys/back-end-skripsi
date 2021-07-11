'use strict';

const { EntitySchema, PrimaryGeneratedColumn } = require ('typeorm');
const Ticket = require('../models/ticket').Ticket ;

const ticketSchema = new EntitySchema({
    name: 'ticket',
    tableName: 'ticket',
    target: Ticket,
    columns: {
        idTiket:{
            type: 'int',
            generated: 'serial',
            primary: true,
            unique: true,
            nullable: false,
        },
        komplain:{
            type: 'text',
            nullable: false,
            // length: 100,
        }, 
        status:{
            type: 'varchar',
            nullable: true,
            length: 100,
        }, 
        idKategory:{
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
        tanggalSelesai:{
            type: 'varchar',
            nullable: true,
        },
        jawaban:{
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
