var fs = require('fs');

//Reading file in syncrhonouse mode, this can block the events
var contents = fs.readFileSync('package.json').toString();
console.log(contents);

//Reading the file in Asynchronous mode, this becomes non blocking with the help of Callback function
fs.readFile('package.json', function(err, buf){

  console.log(buf.toString());
   
});