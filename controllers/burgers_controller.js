const express = require("express");
var burger = require("../models/burger");
var path = require("path");
// routers
var router = express.Router();
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});
router.post("/api/burgers", function(req, res) {
  burger.add(req.body.burger_name, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then no item added, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update(condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
module.exports = router;
