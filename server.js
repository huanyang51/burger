const express = require("express");
const PORT = process.env.PORT || 8080;
var app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
