const express = require("express");
var burger = require("../models/burger");
var path = require("path");
// routers
var router = express.Router();
router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log("controller all: " + JSON.stringify(data));
    res.sendFile(path.join(__dirname, "../test_bench/index.html"));
  });
});
module.exports = router;
