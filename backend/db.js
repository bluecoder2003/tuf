const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "1313neel@Titli",
  database: "flashcards_db",
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