const Joi = require('joi')
const handler = require('../handler/get-ticket-byid')

const route = {
    method: 'GET',
    path: '/ticket/{id}',
    options: {
        tags: ['api', 'Ticket ById'],
        description: 'Ticket ById',
        notes: 'Ticket ById',
        validate: {
            params: {
                id: Joi.string().min(1).max(4000).required()
            },
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
        // auth: 'mobile-jwt'
    },
    handler
}

module.exports = route
