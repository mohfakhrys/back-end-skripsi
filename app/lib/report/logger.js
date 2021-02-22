const pino = require('pino')
const logger = pino({
  prettyPrint: { colorize: true },
  level: process.env.DISABLE_LOG === '1' ? 'silent' : process.env.NODE_ENV === 'production' ? 'info' : 'debug'
})

module.exports = logger
