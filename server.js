	// Load the HTTP library
var http = require("http");

// Create an HTTP server to handle responses
http.createServer( function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Sup Foo");
	res.end();
}).listen(8080);
