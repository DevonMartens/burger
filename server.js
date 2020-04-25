//dependencies 
var express = require("express");
var methodOverride = require("method-override");
var app = express();
var bodyParser = require("body-parser");
var mysql = require('mysql');
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("server listening on:http://localhost:" + PORT);
});
//static files
app.use(express.static("public"));
//connect body parser element
//url encoded parse and json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

var exphbs = require("express-handlebars"); 
//template (spelling?) engine w/ default layout of main
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
//route used
var routes = require("./controllers/burgers_controller.js");



app.use("/", routes);
//maybe needed
//app.listen(port);	 