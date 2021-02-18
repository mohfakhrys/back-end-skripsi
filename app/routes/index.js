'use strict';

const config = require('../../config')

const api = {}

api.plugin ={
    pkg: require('./package.json'),
    multiple: false,

    register: async(server, options)=>{
        const preResponse = (request, h) => {
            let response = request.response
            // console.log({response});
            if (response.isBoom) {
                let statusCode = response.data && response.data.statusCode ? response.data.statusCode : response.output.statusCode
                const code = response.data && response.data.code ? response.data.code : response.output.statusCode
                const msg = response.data && response.data.msg ? response.data.msg : response.message
                const data = response.data && response.data.data ? response.data.data : undefined
                const err = request.server.methods.services.errors.basic(code, msg, data)
                // Fix for F5
                if (response.output.statusCode === 500 || response.output.statusCode === 503 || response.output.statusCode === 504) {
                  statusCode = 400
                }
        
                return h.response(err).code(statusCode)
              }

              if(request.path != "/documentation" && request.path!="/status"){
                response.header("X-XSS-Protection", "1; mode=block");
                response.header("X-Frame-Options", "SAMEORIGIN");
                response.header("X-Content-Type-Options", "nosniff");
                response.header("Content-Security-Policy", config.contentSecurityPolicyValue);
                response.header("Strict-Transport-Security", "max-age=16070400; includeSubDomains" );
                response.header("Referrer-Policy", "no-referrer");
                response.header("Feature-Policy", "vibrate 'none'; geolocation 'none'");
                h.state('TS015c3a15')
              }

              return h.continue
        }
        
        await server.register(require('hapi-auth-jwt2'))
        server.auth.strategy('jwt-asu', 'jwt', {
            key: config.tlsOptions,
            validate: validation,
            verifyOptions: { 
                algorithms: ['ES256'] }
          })
        
        // server.auth.default('portal-web-jwt')

        // register all routing service
        await[ 
            server.register(require('./about-us'))
        ]

        server.ext('onPreResponse', preResponse)
        server.route({
            method: 'GET',
            path: '/up',
            config: {
              description: 'Status endpoint',
              notes: 'Return service current status',
              tags: ['api', 'status']
            },
            handler: (request, h) => {
              return { status: 'up' }
            }
          })
        }
}

const validation = async (decoded, request) => {
  //orm get
  try {
    // do your checks to see if the person is valid
    let userId = decoded.userId;
    // Set user id in every request header.
    request.headers.userId = userId;
    //search 
    let user = await User.findOne({});
    if (user) {
      return {
        isValid: true
      };
    } else {
      console.log('Invalid Credential');
      return {
        isValid: false
      };
    }
  } catch (error) {
    return {
      isValid: false
    };
  }

}
module.exports = api
