//HOW TO WRITE BLOCKING AND NON-BLOCKING CODE



//start by creating a server
//require http

//use http to create the server, passing req and resp as parameters

    //give the response a Head with 200 code (thats how we'll know its successful)
    
    //write a message to the response body, this will be sent back to the client
    
    //end the response, this is how the client knows its received all the data
    
//listen on 8080 for connections




//NOW FOR SOMETHING COMPLETELY DIFFERENT
//Read a file on the File System Module


//require your module (use fs)

//we use fs to read the file 'index.html' with .readFileSync()

//log contents of file

//THIS IS BLOCKING CODE




///change your method! 
//fs.readFileSync to fs.readFile
//add a callback function
//pass parameters error and contents

//require your module (use fs)

//use the .readFile() method on your file
//the [ var contents = ] used before is no longer needed
//add your callback function
//pass in the parameters error and contents

    //log contents of file inside the callback function

//add the next task


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
    //write your non-blocking code using the .readFile() method on your file
    
        //log the contents to the console when the task of reading it is complete
        
        //end the response
        response.end();
    //listen on port 8080 for connections
    }).listen(8080, function(){
        console.log("Listening on port 8080");
    });
});
console.log("The next thing");