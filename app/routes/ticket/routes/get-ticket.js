const Joi = require('joi')
const handler = require('../handler/get-ticket')

const route = {
  method: 'GET',
  path: '/ticket/get-all',
  options: {
    tags: ['api', 'ticket', 'get'],
    description: 'Get Ticket Category',
    notes: 'Roles Category',
    validate:{
        query:{
            
        }
    },
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
    //'mobile-jwt'
  },
  handler
}

module.exports = route
