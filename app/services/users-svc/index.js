
exports.plugin = {
    pkg: require('./package.json'),
    multiple: false,
    register: (server, options) => {
      const services = [].concat(
        require('./users')
      )
      server.method(services)
    }
}
  