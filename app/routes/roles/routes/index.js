const getRoles = require('./get-roles')

function routes (server) {
  server.route(getRoles)
  return server
}

module.exports = routes