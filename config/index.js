const Pack = require('../package')
const Fs = require('fs');
const Path = require('path');

const config ={
    host: process.env.SERVICE_HOST,
    port: process.env.SERVICE_PORT, 
    docsPath: '/documentation',
    version: Pack.version,
    DB: {
		NAME: process.env.DB_NAME,
		USER: process.env.DB_USER,
		PASSWORD: process.env.DB_PASSWORD,
		HOST: {
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			dialect: process.env.DB_DIALECT,
			schema: process.env.DB_SCHEMA,
			pool: {
				max: process.env.DB_MAX_POOL || 5,
				min: process.env.DB_MIN_POOL || 0,
				acquire: process.env.DB_ACQUIRE || 30000,
				idle: process.env.DB_IDLE || 10000
			},
			define: {
				timestamps: false,
				freezeTableName: true
			}
		}
	},
    tlsOptions: {
        key: Fs.readFileSync(Path.join(__dirname, 'ssl/key.pem'), 'utf8'),
        cert: Fs.readFileSync(Path.join(__dirname, 'ssl/cert.pem'), 'utf8')
    },
}

module.exports = config
