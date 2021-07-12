const Joi = require('joi')
const handler = require('../handler/get-thumnail-ticket')

const route = {
    method: 'GET',
    path: '/ticket/image/{id}/thumbnail',
    options: {
        tags: ['api', 'loan-application'],
        description: 'Lampiran image',
        notes: 'Lampiran image Thumbnail',
        validate: {
            params: {
                id: Joi.string().min(1).max(4000)
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
