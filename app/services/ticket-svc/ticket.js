'use strict';

const Boom = require('boom');
const {logger} =require('../../lib/report');
const DBpool = require('../../lib/database/postgrest').pool
const Nasabah = require('../../database/models/nasabah').Nasabah
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

async function insertTicket(nasabahId, complane) {
    logger.info(TAG+'.insertTicket begin')
    const data ={complain:complane, statusTicket:'OPEN', idNasabah:nasabahId,sla:"1 hari"} 
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

async function createTiketByNasabah(nasabahName, complain) {
    logger.info(TAG+'.createTiketByNasabah begin',{nasabahName, complain})
    let id = Date.now()
    console.log(id, nasabahName, complain)
    let saveNasabah = await saveDataNasabah(nasabahName)
    console.log('ini data nasbah cuk',saveNasabah)
    if(!saveNasabah){
        throw Boom.badRequest('tidak bisa input nasabah')
    }
    let idNasabah = saveNasabah.id
    console.log(idNasabah)
    // console.log(data)
    let resultSave =  await insertTicket(idNasabah, complain)
    console.log(resultSave)
    if(!resultSave){
        console.log('masuk kondisi ini dong ')
        await deleteNasabah(idNasabah)
        throw Boom.forbidden('tidak bisa mengirim data')
    }
    return {
        namaNasaba:saveNasabah.nasabahName,
        ticketId:resultSave.idTicket,
        complain:resultSave.complain
    }
}

module.exports=[
    {
        name: 'server.ticke.createTiketByNasabah',
        method: createTiketByNasabah
    }
]
