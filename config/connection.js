const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "huanyang2",
  password: "1234",
  database: "burgers_db"
});
module.exports = connection;