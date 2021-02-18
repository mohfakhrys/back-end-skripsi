
require('dotenv-flow').config();

const Glue = require('glue')
const config = require('./config')
const manifest = require('./config/manifest')

let options = {
  relativeTo: process.cwd() + '/app'
}

const startServer = async function () {
  try {
    const server = await Glue.compose(manifest, options);
    server.listener.keepAliveTimeout = 60000
    await server.start()

    console.log('app lagi jalan cuk')
    console.log(`${config.host}:${config.port}`)
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }
}
//startServer()

if (config.tlsOptions.key) {
  console.log(config.tlsOptions.key)
  startServer()
} else {
  throw 'Missing pub key for services to validate user!'
}
