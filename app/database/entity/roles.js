const {  EntitySchema} =require('typeorm')
const Roles = require('../models/roles').Roles

const roleSchema = new EntitySchema({
  name: 'user_role',
  tableName: 'user_role',
  target:Roles,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    roleName: {
      type: 'varchar',
      nullable: false,
    },
    createdAt: {
      name: 'created_at',
      type: 'date',
      nullable: false,
      default: () => 'CURRENT_TIMESTAMP',
    },
    updateAt: {
      name: 'update_at',
      type: 'date',
      nullable: false,
      default: () => 'CURRENT_TIMESTAMP',
    },
    deleteAt: {
      name: 'delete_at',
      type: 'date',
      nullable: false,
      default: () => 'CURRENT_TIMESTAMP',
    },
  },
})

module.exports= roleSchema