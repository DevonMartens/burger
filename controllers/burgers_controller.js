//manage db array and identify endpoints

//file dependencies req connections to express
var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req,res){
	res.redirect("burgers")
});

router.get("/burgers", function(req,res){
	burgers.selectAll(function(data){
       //handlebars object 
        var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});
//post router
router.post("/burgers/create", function(req,res){
	burgers.insertOne([
        "burger_name" 
        //"devoured"
		],[
            req.body.burger_name
//req.body.devoured
//does that go here? commented out because of error
			], function(data){
				res.redirect("/burgers");
			});
});
//put router after post
router.put("/burgers/update/:id", function(req,res){
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burgers.updateOne({
        "devoured": req.body.devoured
//if (result,changedRows === 0)
//return result.status(404)
//else { result.status(200).end(); }
	}, condition, function(data){
		res.redirect("/burgers")
	});
});
//router.deleteOne(condition, function(req, res))
//var condition = "id" + req.params.id;
//console.log("condition", condition):
//burger.deleteOne(condition, function(result){
//  if result.changed   
//if (result,changedRows === 0)
//return result.status(404)
//else { result.status(200).end(); }  

module.exports = router;