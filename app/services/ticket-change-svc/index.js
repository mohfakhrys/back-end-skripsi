
exports.plugin = {
    pkg: require('./package.json'),
    multiple: false,
    register: (server, options) => {
      const services = [].concat(
        require('./ticketchange')
      )
      server.method(services)
    }
}
  