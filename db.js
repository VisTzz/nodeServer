const { Pool } = require('pg/lib');
const { Sequelize } = require('sequelize')
require('dotenv').config()

const POOL = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'testServer'
})

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {   
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

module.exports = {
    pool,
    sequelize
};