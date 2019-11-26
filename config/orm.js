//connected to connections.js 
var connection = require("../config/connection.js");
// create empty array, fill with loop question marks, return to string
function printQuestionMarks(num){
	var arr = [];

	for (var i=0; i<num; i++){
		arr.push("?");
	}
	return arr.toString();  

}
//translate string into SQL readable query 
function objToSql(ob){
	var arr = [];

	for(var key in ob){
		var value = ob[key];
		if(Object.hasOwnProperty.call(ob, key)){
			if(typeof value === "string" && value.indexOf("") >= 0){
				value = " ' " + value + " ' ";
			}
			arr.push(key + "=" + value);
		}
	}
	return arr.toString();
}
//variable orm connected and exported
var orm = {
	selectAll: function(tableInput, cb){
        var dbQuery = "SELECT * FROM " + tableInput + ";";
        //run connection query 
		connection.query(dbQuery, function(err,results){
			if(err){
				throw err;
            }
            //call back
			cb(results);
		});
	},
//create insert function 
insertOne: function(table,cols,vals,cb){
	var dbQuery = "INSERT INTO " + table;

	dbQuery += "(";
    dbQuery += cols.toString();
	dbQuery += ")";
    dbQuery += "VALUES (";
    dbQuery += printQuestionMarks(vals.length);
	dbQuery += ")";

	console.log(dbQuery);
//connect
	connection.query(dbQuery,vals, function(err, results){
		if(err){
			throw err;
		}
		cb(results);
	});
},
//create update one
updateOne: function(table, objColVals, condition, cb){
	var dbQuery = "UPDATE " + table;
	dbQuery += "SET";
	dbQuery += objToSql(objColVals);
	dbQuery += " WHERE ";
	dbQuery += condition;

	console.log(dbQuery);
	connection.query(dbQuery, function(err, results){
		if(err){
			throw err;
		}
		cb(result);
	});
 },
};

//detleteOne function to help manage additions

//deleteOne: function(table, condition, cb) {
  //  var dbQuery =("DELETE FROM" + table + "WHERE" + condition;)
   // console.log(dbQuery);
//	connection.query(dbQuery, function(err, results){
//		if(err){
//			throw err;
//		}
//		cb(result);
//	});
//}

module.exports = orm;