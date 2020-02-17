var orm = require("../config/orm");
// functions to take input and use the input to interact with database
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  add: function(newItem, cb) {
    orm.add("burgers", "burger_name", newItem, function(res) {
      cb(res);
    });
  },
  update: function(condition, cb) {
    orm.update("burgers", "devoured", 1, condition, function(res) {
      cb(res);
    });
  }
};
module.exports = burger;
