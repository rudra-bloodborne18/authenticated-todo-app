const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: "todo-app",
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

module.exports = pool