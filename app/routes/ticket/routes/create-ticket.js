const Joi = require('joi')
const handler = require('../handler/create-ticket')

const route = {
  method: 'POST',
  path: '/ticket/create/by-nasabah',
  options: {
    tags: ['api', 'ticket'],
    description: 'Create Ticket by nasabah',
    notes: 'ticket create for nasabah',
    validate: {
      payload: {
        image: Joi.any()
            .meta({ swaggerType: 'file' })
            .required()
            .description('Bukti Complain'),
        idNasabah:Joi.string().min(5).required(),
        complain:Joi.string().min(5).required(),
        idKategoty:Joi.string().min(5).required(),
      }
    },
    payload: {
      maxBytes: 4194304,
      parse: true,
      allow: 'multipart/form-data',
      output: 'stream'
    },
    // validate:{},
    // validate: {
    //   headers: Joi.object({
    //     Authorization: Joi.string().min(1).max(4000),
    //     'Content-Language': Joi.string().valid(['id-ID', 'en-US']).default('id-ID').optional()
    //   }).unknown()
    // },
    plugins: {
      'hapi-swagger': {
        payloadType: 'form',
        responses: {
          '200': {
            description: 'Success'
          }
        }
      }
    },
    // auth: 'jwt-asu'
  },
  handler
}

module.exports = route
