'use strict';
const pino = require('pino')
const logger = pino({
  prettyPrint: { colorize: true },
  level: process.env.DISABLE_LOG === '1' ? 'silent' : process.env.NODE_ENV === 'production' ? 'info' : 'debug'
})

module.exports = logger


// const pino = require('pino')
// const options = {
//   prettyPrint: process.env.NODE_ENV !== 'production',
//   logEvents: false,
//   redact: [
//       'req.headers', 
//       'options.formData.document', 'formData.document',
//       'options.body.requests', 'body.requests'
//   ]
// }

// const logger = pino(options)

// module.exports = logger
