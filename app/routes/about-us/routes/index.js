const aboutus = require('./abous-us')

function routes (server) {
  server.route(aboutus)
  return server
}

module.exports = routes