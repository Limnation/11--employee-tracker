// Dependencies
// Dotenv
require("dotenv").config();
// mySQL required
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB,
});

//exports
module.exports = { connection };
