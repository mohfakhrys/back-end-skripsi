const Boom = require('boom')
const config = require('./index')

const swaggerDocumentation = {
    info: {
      title: 'Complain',
      version: config.version
    },
    documentationPath: '/documentation'
}

const manifest ={
    server: {
        host: config.host,
        port: config.port,
        routes: {
          cors: {
            origin: ['*']
          },
          validate: {
            failAction: async (request, h, err) => {
              if (process.env.NODE_ENV === 'production') {
                // In prod, log a limited error message and throw the default Bad Request error.
                // console.error('ValidationError:', err.message); // Better to use an actual logger here.
                throw Boom.badRequest(`Invalid request payload input`);
              } else {
                // During development, log and respond with the full error.
                // console.error(err);
                throw err;
              }
            }
          }
        },
        state:{
          strictHeader: true,
          ignoreErrors: false,
          isSecure: true,
          isHttpOnly: true,
          isSameSite: 'Strict',
          encoding: 'none',
        }
      },
      register:{
        plugins:[
            // { plugin: 'laabr'},
            { 
                plugin: 'hapi-pino',
                options: {
                prettyPrint: process.env.NODE_ENV !== 'production',
                level: process.env.DISABLE_LOG === '1' ? 'silent' : process.env.NODE_ENV === 'production' ? 'info' : 'debug'
                }
            },
            { plugin: 'hapijs-status-monitor' },
            { plugin: 'blipp' },
            { plugin: 'inert' },
            { plugin: 'vision' },
            { plugin: 'hapi-swagger', options: swaggerDocumentation },
            
            /**
             * 
             * 
             * 
             */
            
            {
              plugin: './routes',
              options: {
                routes: {
                  prefix: '/route'
                }
              }
            }
        ]
      }
}

if (process.env.NODE_ENV !== 'test') {
    manifest.register.plugins.push({
      plugin: 'good',
      options: {
        ops: {
          interval: 1000
        },
        reporters: {
              myConsoleReporter: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [
                  { log: '*', 
                    response: '*', 
                    request: '*' 
                  }]
                }, 
                { 
                  module: 'good-console'
                }, 'stdout']
          //   myConsoleReporter: 
          //   [
          //       {
          //           module: 'good-squeeze',
          //           name: 'Squeeze',
          //           args: [{ log: '*', response: '*' }]
          //       }, 
          //       {
          //           module: 'good-console'
          //       }, 'stdout'
          //   ],
          //   myFileReporter: 
          //   [
          //       {
          //           module: 'good-squeeze',
          //           name: 'Squeeze',
          //           args: [{ error: '*', response: '*',log : '*',  request: '*' }]
          //       }, 
          //       {
          //           module: 'good-squeeze',
          //           name: 'SafeJson'
          //       }, 
          //       {
          //           module: 'good-file',
          //           args: ['./logs/log']
          //       }
          //   ],
          //   myHTTPReporter: 
          //   [
          //       {
          //           module: 'good-squeeze',
          //           name: 'Squeeze',
          //           args: [
          //                   { error: '*' }
          //           ]
          //       }, 
          //       {
          //           module: 'good-http',
          //           args: ['http://localhost:8000/logs', 
          //               {
          //                   wreck: {
          //                       headers: { 'x-api-key': 12345 }
          //                   }
          //               }
          //           ]
          //       }
          //   ]
          // 
        }
      }
    })
}

module.exports = manifest