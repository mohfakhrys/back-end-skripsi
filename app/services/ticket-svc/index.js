
exports.plugin = {
    pkg: require('./package.json'),
    multiple: false,
    register: (server, options) => {
      const services = [].concat(
        require('./ticket')
      )
      server.method(services)
    }
}
  