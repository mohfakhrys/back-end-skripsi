const Joi = require('joi')
const handler = require('../handler/about-us')

const route = {
  method: 'GET',
  path: '/help/api/content-category',
  options: {
    tags: ['api', 'help'],
    description: 'Help Category',
    notes: 'Help Category',
    validate: {
      // headers: Joi.object({
      //   Authorization: Joi.string().min(1).max(4000),
      //   'Content-Language': Joi.string().valid(['id-ID', 'en-US']).default('id-ID').optional()
      // }).unknown()
    },
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
    /**
     * auth for asuuuuuuuuu
     */
    // auth: 'jwt-asu'
    //'mobile-jwt'
  },
  handler
}

module.exports = route
