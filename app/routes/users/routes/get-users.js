const Joi = require('joi')
const handler = require('../handler/get-users')

const route = {
  method: 'GET',
  path: '/users/get/users',
  options: {
    tags: ['api', 'users'],
    description: 'Get Users',
    notes: 'Get Users Manager',
    validate: {
        query:{
            limit: Joi.number().min(1).optional(),
            offset: Joi.number().min(0).optional(),
            userName: Joi.string().max(45).alphanum().optional(),
            firstName: Joi.string().max(45).alphanum().optional(),
            lastName: Joi.string().max(45).alphanum().optional(),
            email: Joi.string().max(45).email().optional(),
        }
        
    //   headers: Joi.object({
    //     Authorization: Joi.string().min(1).max(4000),
    //     'Content-Language': Joi.string().valid(['id-ID', 'en-US']).default('id-ID').optional()
    //   }).unknown()
    },
    plugins: {
      'hapi-swagger': {
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