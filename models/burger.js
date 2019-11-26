//dependency
var orm = require("../config/orm.js");
//burger variable and export it
var burger = {
    //call back all or orms 
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	insertOne: function(cols,vals,cb){
		orm.insertOne("burgers", cols, vals, function(res){
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb){
		orm.updateOne("burgers", objColVals, condition, function(res){
			cb(res);
		});
	}
};
//exporting burger
module.exports = burger