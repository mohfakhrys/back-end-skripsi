const { TABLES } = require('../constants');
const uuid = require('uuid/v4');
const users = (sequelize, Sequelize) => {
	const userData = sequelize.define(TABLES.USERS, {
		id: {
			allowNull: false,
			primaryKey: true,
			type: Sequelize.UUID,
			defaultValue: uuid()
		},
		username: {
			type: Sequelize.STRING,
			field: 'username',
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

	return userData;
};

module.exports = users;
