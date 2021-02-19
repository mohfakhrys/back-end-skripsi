const { TABLES } = require('../../constants');
const { v4: uuidv4 } = require('uuid');
const roles = (sequelize, Sequelize) => {
	const Roles = sequelize.define(TABLES.ROLES, {
		id: {
			allowNull: false,
			primaryKey: true,
			type: Sequelize.STRING,
			defaultValue: uuidv4()
		},
		name: {
			type: Sequelize.STRING,
			field: 'name',
			get() {
				const value = this.getDataValue('name');
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
				//exclude: ['id']
			}
		}
	});
	// console.log(Roles);
	Roles.sync()
	return Roles;
};

module.exports = roles
