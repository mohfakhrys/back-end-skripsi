'use strict';

const { Pool , types} = require('pg')
var dayjs = require('dayjs')

const parseDate = val => val === null ? null : dayjs(val).format('YYYY-MM-DD hh:mm:ss')

types.setTypeParser(1082, parseDate)
types.setTypeParser(1114, parseDate)
types.setTypeParser(1184, parseDate)

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    schema:process.env.DB_SCHEMA,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    idleTimeoutMillis: process.env.DB_IDLE,
    max: process.env.DB_MAX_POOL,
    connectionTimeoutMillis: 2000,
})

module.exports = {
  pool
}
