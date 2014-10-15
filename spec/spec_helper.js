var request = require('request');
process.env.EXPRESS_ENV = "test";
var app = require('../app'); //Require our app

var stopServer = function (){
	//app.close();
	//	asyncSpecDone();
}

var startServer = function (){
	var server = app.listen(8000);
}
app.set('environment', "test");


module.exports.stopServer = stopServer;
module.exports.startServer = startServer;
