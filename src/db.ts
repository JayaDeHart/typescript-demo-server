const mysql = require('mysql2/promise');
require('dotenv').config();

console.log(process.env.USER);

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PASSWORD,
});

module.exports = db;
