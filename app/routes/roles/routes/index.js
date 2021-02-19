function routes (server) {
  server.route(require('./get-roles'))
  server.route(require('./create-role'))
  return server
}

module.exports = routes