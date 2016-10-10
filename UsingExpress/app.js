var express = require('express');
var http = require('http');

var host = "localhost"
var port = "8000"

var app = express();

app.use(express.static(__dirname+'/public'));

http.createServer(app)
    .listen(port, host, function(){
  
   console.log("Server listening using express on port"+port);
    
    });