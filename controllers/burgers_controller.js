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
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/api/burgers", function(req, res) {
  console.log("controller add req: " + req.body.burger_name);
  burger.add(req.body.burger_name, function(result) {
    console.log("controller add: " + JSON.stringify(result));
    res.sendFile(path.join(__dirname, "../test_bench/index.html"));
  });
});
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
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
