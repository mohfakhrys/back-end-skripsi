'use strict';

const userSchema = require('./entity/users')
const roleSchema = require('./entity/roles')
const nasabahSchema = require('./entity/nasabah')
const categorySchema = require('./entity/category')
const ticketSchema = require('./entity/ticket')
const ticketChangeSchema = require('./entity/ticket-change');

module.exports = {
  nasabahSchema,
  categorySchema,
  ticketChangeSchema,
  ticketSchema,
  userSchema,
  roleSchema,
}
