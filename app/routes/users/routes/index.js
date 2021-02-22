function routes (server) {
    server.route(require('./create-user'))
    server.route(require('./get-users'))
    return server
  }
  
  module.exports = routes