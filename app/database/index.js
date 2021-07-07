'use strict';

const {logger } = require('../lib/report')
const { createConnection } = require('typeorm')
const {SnakeNamingStrategy} = require('typeorm-naming-strategies')
const entity = require('./entity')


const database = {}

database.plugin = {
	pkg: require('./package.json'),
	multiple: false,
	register: async(server, options)=>{
		const connection = await createConnection({
			type: process.env.DB_DRIVER,
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			schema: process.env.DB_SCHEMA,
			synchronize: (process.env.DB_SYNC === 'true'),
			logging: (process.env.DB_LOGGING === 'true'),
			entities: Object.values(entity),
			namingStrategy: new SnakeNamingStrategy(),
			logging: true
		})
		if(process.env.NODE_ENV === 'production'){
			console.log('production');
		}
	}
	
}

module.exports= database
