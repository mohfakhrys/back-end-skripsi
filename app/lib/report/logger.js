'use strict';

const pino = require('pino')
const options = {
  prettyPrint: process.env.NODE_ENV !== 'production',
  logEvents: false,
  redact: [
      'req.headers', 
      'options.formData.document', 'formData.document',
      'options.body.requests', 'body.requests'
  ]
}

const logger = pino(options)

module.exports = logger
