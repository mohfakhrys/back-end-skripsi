const Joi = require('joi')
const handler = require('../handler/create-user')

const route = {
  method: 'POST',
  path: '/users/register',
  options: {
    tags: ['api', 'user'],
    description: 'Create User',
    notes: 'User Registration API',
    validate: {
      payload: {
        userName: Joi.string().min(5).max(45).required(),
        fullName: Joi.string().min(5).max(45).required(),
        rekening: Joi.string().min(5).max(45).required(),
        email: Joi.string().min(5).max(45).email().required(),
        password: Joi.string().min(5).max(45).required(),
        userRoles: Joi.string().required()
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
