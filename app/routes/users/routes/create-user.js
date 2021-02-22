const Joi = require('joi')
const handler = require('../handler/create-user')

const route = {
  method: 'POST',
  path: '/users/user',
  options: {
    tags: ['api', 'user'],
    description: 'Create User',
    notes: 'User Registration API',
    validate: {
        payload: {
            userName: Joi.string().min(5).max(45).alphanum().required(),
            firstName: Joi.string().min(5).max(45).alphanum().required(),
            lastName: Joi.string().min(5).max(45).alphanum().required(),
            email: Joi.string().min(5).max(45).email().required(),
            password: Joi.string().min(5).max(45).alphanum().required(),
            userRoles:Joi.string().required()
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