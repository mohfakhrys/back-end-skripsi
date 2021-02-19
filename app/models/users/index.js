const { TABLES } = require('../../constants');
const { v4: uuidv4 } = require('uuid');
const users = (sequelize, Sequelize) => {
	const userData = sequelize.define(TABLES.USERS, {
		id: {
			allowNull: false,
			primaryKey: true,
			type: Sequelize.UUID,
			defaultValue: uuidv4()
		},
		username: {
			type: Sequelize.STRING,
			field: 'username',
			get() {
				const value = this.getDataValue('username');
				return (value === null) ? undefined : value;
			}
		},
		firstName: {
			type: Sequelize.STRING,
			field: 'first_name',
			get() {
				const value = this.getDataValue('username');
				return (value === null) ? undefined : value;
			}
		},
		password: {
			type: Sequelize.STRING,
			field: 'password',
			get() {
				const value = this.getDataValue('password');
				return (value === null) ? undefined : value;
			}
		},
		createDate: {
			type: Sequelize.DATE,
			field: 'create_date',
			get() {
				const value = this.getDataValue('createDate');
				return (value === null) ? undefined : value;
			}
		},
		updateDate: {
			type: Sequelize.DATE,
			field: 'update_date',
			get() {
				const value = this.getDataValue('updateDate');
				return (value === null) ? undefined : value;
			}
		},
		deleteDate: {
			type: Sequelize.DATE,
			field: 'delete_date',
			get() {
				const value = this.getDataValue('deleteDate');
				return (value === null) ? undefined : value;
			}
		}
	}, {
		defaultScope: {
			attributes: {
				exclude: ['id']
			}
		}
	});
	userData.sync()
	// console.log(userData);
	return userData;
};

module.exports = users;
