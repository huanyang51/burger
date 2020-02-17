var connection = require("./connection");
var orm = {
  all: function selectAll(tableName, cb) {
    connection.query("SELECT * FROM ??", [tableName], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  add: function insertOne(tableName, col, newItem, cb) {
    connection.query(
      `INSERT INTO ${tableName} (${col}) VALUES ("${newItem}");`,
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },
  update: function updateOne(tableName, col, newValue, condition, cb) {
    console.log(
      `UPDATE ${tableName} SET ${col}=${newValue} WHERE ${condition};`
    );
    connection.query(
      `UPDATE ${tableName} SET ${col}=${newValue} WHERE ${condition};`,
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  }
};

module.exports = orm;
