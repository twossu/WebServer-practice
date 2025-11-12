require("dotenv").config();

const mysql = require("mysql2"); // npm install mysql2
const dbConnect = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_CONNECT_ID,
  password: process.env.DB_CONNECT_PW,
  database: "node_db",
});

dbConnect.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("MySQL connected");
  }
});

module.exports = dbConnect;
