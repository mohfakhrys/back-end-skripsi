function routes (server) {
    server.route(require('./create-ticket'))
    server.route(require('./get-ticket'))
    return server
  }
  
  module.exports = routes
