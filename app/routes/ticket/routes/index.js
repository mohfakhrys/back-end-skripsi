function routes (server) {
    server.route(require('./create-ticket'))
    server.route(require('./get-ticket'))
    server.route(require('./get-thumnail-ticket'))
    return server
  }
  
  module.exports = routes
