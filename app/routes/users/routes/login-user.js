const Joi = require('joi')
const handler = require('../handler/login-user')

const route = {
  method: 'POST',
  path: '/users/login',
  options: {
    tags: ['api', 'login user'],
    description: 'Login user',
    notes: 'Login user to get token API',
    validate: {
      payload: Joi.object().keys({
        userName: Joi.string().max(22).min(6).required(),
        password: Joi.string().min(6).max(100).required(),
        // device_id: Joi.string().max(50).required(),
      })
    },
    plugins: {
      'hapi-swagger': {
        responses: {
          '200': {
            description: 'Success',
            schema: {}
          }
        }
      }
    },
    auth: false
  },
  handler
}

module.exports = route
