//HOW TO WRITE BLOCKING AND NON-BLOCKING CODE



//start by creating a server
//require http
var http = require('http');
//use http to create the server, passing req and resp as parameters
http.createServer(function(request, response) {
//give the response a Head with 200 code (thats how we'll know its successful)
  response.writeHead(200);
//write a message to the response body, this will be sent back to the client
  response.write("Hello, this is Bob");
//end the response, this is how the client knows its received all the data
  response.end();
//dont forget to listen on 8080 for connections
}).listen(8080, function() {
    console.log("Listening on port 8080...");
});



//NOW FOR SOMETHING COMPLETELY DIFFERENT
//Read a file on the File System Module


//require your module (use fs)
var fs = require('fs');
//we use fs to read the file 'index.html'
var contents = fs.readFileSync('index.html');
//log contents of file
console.log(contents);
//THIS IS BLOCKING CODE


///change your function! 
//fs.readFileSync to fs.readFile


var fs = require('fs');
//
var contents = fs.readFile('index.html');
//log contents of file
console.log(contents);


//add your callback!
//pass in parameters: error and contents

var fs = require('fs');
//the [ var contents = ] used before is no longer needed
fs.readFile('index.html', function(error, contents){
    
});
//log the contents inside of the callback function.
//NOW THE SAME CODE IS NON-BLOCKING




//Go back to the server we created
//After response.writeHead(200), add a call to fs.readFile() 
//have the callback function read index.html asynchronously. 
//Remember to pass a callback function, that accepts an error parameter, and a contents parameter.

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write('This server is awesome');
    fs.readFile('index.html', function(error, contents) {
        console.log(contents);
    response.end();
    }).listen(8080, function(){
        console.log("Listening on port 8080");
    });
});