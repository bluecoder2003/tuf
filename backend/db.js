const mysql = require("mysql2");
require("dotenv").config();
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected!");
    connection.release();
  }
});

module.exports = pool.promise();