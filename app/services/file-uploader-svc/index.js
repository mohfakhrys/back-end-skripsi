exports.plugin = {
  pkg: require('./package.json'),

  multiple: false,

  register: (server, options) => {
    const services = [].concat(
      require('./file-uploader'),
      // require('./document-upload')
    )
    server.method(services)
  }
}
