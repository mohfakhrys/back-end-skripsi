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
        nasabahName:Joi.string().min(5).max(45).alphanum().required(),
        complain:Joi.string().min(5).alphanum().required(),
      }
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
        // payloadType: 'form',
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
