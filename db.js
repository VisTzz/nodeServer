const { Pool } = require('pg/lib');

const POOL = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'testServer'
})

module.exports = pool;