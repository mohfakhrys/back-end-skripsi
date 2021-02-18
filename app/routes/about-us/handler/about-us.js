const aboutUsContent = require('./content')

async function handler() {
  return await aboutUsContent.content()
    
  }
  
  module.exports = handler
  