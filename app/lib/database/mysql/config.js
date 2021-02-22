module.exports = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    idleTimeoutMillis: process.env.DB_IDLE,
    max: process.env.DB_MAX_POOL
}
