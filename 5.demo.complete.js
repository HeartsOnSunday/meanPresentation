//HOW TO WRITE BLOCKING AND NON-BLOCKING CODE



//start by creating a server
//require http
var http = require('http');
//use http to create the server, passing req and resp as parameters
http.createServer(function(request, response) {
    //give the response a Head with 200 code (thats how we'll know its successful)
    response.writeHead(200);
    //write a message to the response body, this will be sent back to the client
    response.write("Oh, look, a server!");
    //end the response, this is how the client knows its received all the data
    response.end();
//listen on 8080 for connections
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
console.log("the next thing");
//THIS IS BLOCKING CODE




///change your method! 
//fs.readFileSync to fs.readFile

//require your module (use fs)
var fs = require('fs');
//use the .readFile() method on index.html
var contents = fs.readFile('index.html');
//log contents of file
console.log(contents);


//add your callback!
//pass in parameters: error and contents

var fs = require('fs');
//use the .readFile() method on your file
//the [ var contents = ] used before is no longer needed
fs.readFile('index.html', function(error, contents){
    console.log(contents);
});
//log the contents inside of the callback function.
//NOW THE SAME CODE IS NON-BLOCKING




//Go back to the server we created
//After response.writeHead(200), add a call to fs.readFile() 
//have the callback function read index.html asynchronously. 
//Remember to pass a callback function, that accepts an error parameter, and a contents parameter.



//start by creating a server
//require http
var http = require('http');
//require the fs module
var fs = require('fs');

//use http to create the server, passing req and resp as parameters
http.createServer(function(request, response) {
    //give the response a Head with 200 code
    response.writeHead(200);
    //write a message to the response body,
    response.write('This server is awesome');
    //use the .readFile() method on your file
    fs.readFile('index.html', function(error, contents) {
        //log the contents to the console when the task of reading it is complete
        console.log(contents);
        //end the response
        response.end();
    //listen on port 8080 for connections
    }).listen(8080, function(){
        console.log("Listening on port 8080");
    });
});