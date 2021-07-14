const aboutUsContent = require('./content')

async function handler() {
  const data = await aboutUsContent.content()
    return data
  }
  
  module.exports = handler
  