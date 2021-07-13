function routes (server) {
    server.route(require('./create-ticket'))
    server.route(require('./get-ticket'))
    server.route(require('./get-thumnail-ticket'))
    server.route(require('./get-ticket-byid'))
    return server
  }
  
  module.exports = routes
