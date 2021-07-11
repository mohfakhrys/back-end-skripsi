'use strict';

const userSchema = require('./entity/users')
const roleSchema = require('./entity/roles')
const nasabahSchema = require('./entity/nasabah')
const categorySchema = require('./entity/category')
const ticketSchema = require('./entity/ticket')

module.exports = {
  nasabahSchema,
  categorySchema,
  //kategory,
  //ticketchange,
  ticketSchema,
  userSchema,
  roleSchema,
}
