const Joi = require('joi')
const handler = require('../handler/get-roles')

const route = {
  method: 'GET',
  path: '/auth/roles',
  options: {
    tags: ['api', 'roles'],
    description: 'Get Roles Category',
    notes: 'Roles Category',
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
    //'mobile-jwt'
  },
  handler
}

module.exports = route