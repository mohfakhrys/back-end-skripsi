const { register } = require('hapi-auth-jwt2');
const Sequelize = require('sequelize');
const { DB } =require('../../config')
// const roles = require('./roles')(sequelize, Sequelize)
// const users = require('./users')(sequelize, Sequelize)

exports.plugin = {
	pkg: require('./package.json'),

	multiple: false,
	register: async(server, options)=>{
		let databaseConnection = new Sequelize(DB)
		try {
			await databaseConnection
			// await sequelize.authenticate();
			console.log('Connection has been established successfully.');
		  } catch (error) {
			console.error('Unable to connect to the database:', error);
		  }
		databaseConnection
		require('./users')
	}
}

// async function connect() {
// 	try {
// 		await database.authenticate();
// 		console.log('Connection has been established successfully.');
// 	  } catch (error) {
// 		console.error('Unable to connect to the database:', error);
// 	  }
	  
// }

// const database = {};
// // Models relationship
// database.login.belongsTo(database.roles, { as: 'roleDetail', foreignKey: 'roleId', targetKey: 'id' });

// module.exports =  [
// 	connect()
// ];