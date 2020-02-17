const mysql = require("mysql");
var connection =
  process.env.JAWSDB_URL ||
  mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "huanyang2",
    password: "1234",
    database: "burgers_db"
  });
connection.connect(function(err) {
  if (err) throw err;
});
module.exports = connection;
