'use strict';

const userSchema = require('./entity/users')
const roleSchema = require('./entity/roles')
const nasabahSchema = require('./entity/nasabah')
const ticketSchema = require('./entity/ticket')

module.exports = {
  nasabahSchema,
  ticketSchema,
  userSchema,
  roleSchema,
}
