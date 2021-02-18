const { TABLES } = require('../constants');
const uuid = require('uuid/v4');
const roles = (sequelize, Sequelize) => {
	const Roles = sequelize.define(TABLES.ROLES, {
		id: {
			allowNull: false,
			primaryKey: true,
			type: Sequelize.UUID,
			defaultValue: uuid()
		},
		name: {
			type: Sequelize.STRING,
			field: 'name',
			get() {
				const value = this.getDataValue('name');
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

	return Roles;
};

module.exports = roles;
