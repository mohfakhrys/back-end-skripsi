const Boom = require('boom')
const config = require('./index')
const logger =require('../app/lib/report')

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
        state:('TS015c3a15', {
          strictHeader: true,
          ignoreErrors: false,
          isSecure: true,
          isHttpOnly: true,
          isSameSite: 'Strict',
          encoding: 'none'
        })
      },
      register:{
        plugins:[
            { plugin: 'laabr'},
            { plugin: require('../app/database')},
            { plugin: 'blipp' },
            { plugin: 'inert' },
            { plugin: 'vision' },
            { plugin: 'hapi-swagger', options: swaggerDocumentation },
            { plugin:'hapijs-status-monitor', 
              options: {
                title: 'Monitoring Status',
                path: '/status',
                websocket: null, // The Socket.io instance to be used, if none provided a new one will be created!
                spans: [{
                  interval: 1,     // Every second
                  retention: 60    // Keep 60 datapoints in memory
                }, {
                  interval: 5,     // Every 5 seconds
                  retention: 60
                }, {
                  interval: 15,    // Every 15 seconds
                  retention: 60
                }],
                
            }
          
            },
            /**
             * 
             * 
             * 
             */
            // { plugin: 'hapi-sequelizejs', 
            //   options:[
            //     {
            //       name:'asu'
            //     }
            //   ]
            //   // options: [
            //   //   {
            //   //       name: 'dbname', // identifier
            //   //       models: [__dirname + '/server/models/**/*.js'], // paths/globs to model files
            //   //       ignoredModels: [__dirname + '/server/models/**/*.js'], // OPTIONAL: paths/globs to ignore files
            //   //       sequelize: new Sequelize(config.DB), // sequelize instance
            //   //       sync: true, // sync models - default false
            //   //       forceSync: false, // force sync (drops tables) - default false
            //   //   },
            //   // ],
  
            // },
            { plugin: './services/roles-svc'},

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
              args: [{ }]
              }, 
            {
              module: 'good-console'
            }, 'stdout']
        }
      }
    })
}

module.exports = manifest