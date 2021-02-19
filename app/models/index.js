'use strict';

const { TABLES } = require('../constants');
const { v4: uuidv4 } = require('uuid');
// const pg = require('pg');
// const pghstore = require('pg-hstore')
// const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');
const config =require('../../config');

exports.plugin = {
	pkg: require('./package.json'),
	name:'database',
	multiple: false,

	register: async(server, options)=>{
		try {
			let uri = config.DB
			let databaseConnection = new Sequelize(uri)
			
			databaseConnection.authenticate().then(() => {
						console.log('Connection has been established successfully.');
					}).catch(err => {
						console.error('Unable to connect to the database:', err);
					});
			require('./users')(databaseConnection, Sequelize)
			require('./roles')(databaseConnection, Sequelize)
		} catch (error) {
			console.error('Unable to connect to the database:', error);
		}

	}
}
