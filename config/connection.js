//dependencies
var mysql = require("mysql");
//connection to database
var connection;

if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 8889,
		host: "localhost",
		user: "root",
		password: "docker",
		database: "burgers_db"
	});
};
//console log let you know if connected
connection.connect(function(err){
	if(err){
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});
//export module
module.exports = connection;