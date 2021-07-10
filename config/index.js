'use strict';

const Pack = require('../package')
const Fs = require('fs');
const Path = require('path');
const {logger } =require('../app/lib/report')

const config ={
	env :process.env.NODE_ENV || 'development',
    host: process.env.SERVICE_HOST,
    port: process.env.SERVICE_PORT, 
    docsPath: '/documentation',
    version: Pack.version,
	version:'1',
    DB: {
		database: process.env.DB_NAME,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: process.env.DB_DIALECT || 'postgres',
		schema: process.env.DB_SCHEMA,
		// logging: console.log,
		//sync: { force: false },
		pool: {
				max: parseInt(process.env.DB_MAX_POOL)  || 5,
				min: parseInt(process.env.DB_MIN_POOL) || 0,
				acquire: parseInt(process.env.DB_ACQUIRE) || 30000,
				idle: parseInt(process.env.DB_IDLE) || 10000
			},
			define: {
				timestamps: false,
				freezeTableName: true
			},
	},
    tlsOptions: {
        public: Fs.readFileSync(Path.join(__dirname, 'ssl/certificate.crt'), 'utf8'),
        private: Fs.readFileSync(Path.join(__dirname, 'ssl/privateKey.key'), 'utf8')
    },
	uploadDestination:process.env.UPLOAD_DEST||'/Users/ilham/Desktop/handling/upload'
}

module.exports = config
