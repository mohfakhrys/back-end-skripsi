const { DB } = require('../../../config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
	DB.NAME,
	DB.USER,
	DB.PASSWORD,
	DB.HOST
);

const database = {};

database.sequelize = sequelize;
// database.login = require('../models/login')(sequelize, Sequelize);
// database.roles = require('../models/roles')(sequelize, Sequelize);
// database.client = require('../models/client')(sequelize, Sequelize);
// database.loginTp = require('../models/loginTp')(sequelize, Sequelize);

// Models relationship
database.login.belongsTo(database.roles, { as: 'roleDetail', foreignKey: 'roleId', targetKey: 'id' });

module.exports = database;
