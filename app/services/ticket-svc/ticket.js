'use strict';

const Boom = require('boom');
const {logger} =require('../../lib/report');
const DBpool = require('../../lib/database/postgrest').pool
const Nasabah = require('../../database/models/nasabah').Nasabah
const Users = require('../../database/models/users').Users
const Ticket = require('../../database/models/ticket').Ticket
const { getRepository } = require('typeorm');

const TAG = 'server.services.ticket'

async function saveDataNasabah(nasabahName) {
    logger.info(TAG+'.saveDataNasabah begin')
    let id = Date.now()
    console.log(id)
    logger.debug({nasabahName, id})
    return await getRepository(Nasabah).save({id:id, nasabahName:nasabahName,})
}

async function insertTicket(idNasabah, complain, idKategory, path) {
    logger.info(TAG+'.insertTicket begin')
    const data ={komplain:complain, status:'NEW', idNasabah:idNasabah, lampiran:path, idKategory:idKategory} 
    console.log(data)
    let resultSave =  await getRepository(Ticket).save(data)
    console.log({resultSave})
    logger.debug(TAG, resultSave)
    return resultSave
}

async function deleteNasabah(id) {
    logger.info(TAG+'.deleteNasabah begin')
    const result = await getRepository(Nasabah).delete({id:id})
    return result
}

async function createTiketByNasabah(idNasabah, complain, idKategory, path) {
    logger.info(TAG+'.createTiketByNasabah begin',{idNasabah, complain, idKategory, path})
    // let id = Date.now()
    // console.log(id, nasabahName, complain)
    // // let saveNasabah = await saveDataNasabah(nasabahName)
    // console.log('ini data nasbah cuk',saveNasabah)
    // if(!saveNasabah){
    //     throw Boom.badRequest('tidak bisa input nasabah')
    // }
    // let idNasabah = saveNasabah.id
    // console.log(idNasabah)
    // console.log(data)
    let resultSave =  await insertTicket(idNasabah, complain, idKategory, path)
    console.log(resultSave)
    return {
        // namaNasaba:saveNasabah.nasabahName,
        ticketId:resultSave.idTicket,
        complain:resultSave.complain,

    }
}

async function getAlTicket({limit = 10, offset = 0, q,}) {
    logger.info(TAG+'.getAlTicket begin')
    limit = limit < 1 ? 1 : limit
    limit = limit > 100 ? 100 : limit
}

module.exports=[
    {
        name: 'server.ticke.createTiketByNasabah',
        method: createTiketByNasabah
    },
    {
        name: 'server.ticke.getAlTicket',
        method: getAlTicket
    }
]
