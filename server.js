// Load the HTTP library
var http = require("http");

// Create an HTTP server to handle responses
http.creatServer( function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Sup Foo");
	res.end();
}).listen(8080);
