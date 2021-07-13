const Joi = require('joi')
const handler = require('../handler/create-role')

const route = {
  method: 'POST',
  path: '/auth/role',
  options: {
    tags: ['api', 'roles', 'create'],
    description: 'Create Roles Category',
    notes: 'Create Roles Category',
    validate: {
        payload: {
          id: Joi.number().max(45).required(),
          role_name: Joi.string().min(5).max(45).required(),
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
    //'mobile-jwt'
  },
  handler
}

module.exports = route
