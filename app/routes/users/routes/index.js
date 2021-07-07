function routes (server) {
    server.route(require('./create-user'))
    server.route(require('./get-users'))
    server.route(require('./login-user'))
    return server
  }
  
  module.exports = routes
