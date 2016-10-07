var http = require('http');
var port = 8000;
var host = 'localhost';

var server = http.createServer(function(request, response){
      
      //printing out headers to the console.
      console.log(request.headers);
   //Setting the response code and the type of response header.
   response.writeHead(200, {"Content-Type" : "text/plain"  });
   response.end("Hello World");
});

//configuration of server to get started on a port, host 
//then callback function to display a message to the console when server starts.
server.listen(port, host, function(){
	console.log("Server running at port "+port);
});
