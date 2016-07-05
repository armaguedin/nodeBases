     var http = require('http')  
     var fs = require('fs')  
       
     var server = http.createServer(function (req, res) {  
       res.writeHead(200, { 'content-type': 'text/plain' })  
       
       fs.createReadStream(process.argv[3]).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))  
     
     
     /*   https://docs.nodejitsu.com/articles/advanced/streams/how-to-use-fs-create-read-stream/
     
     var port = process.argv[2];
var fileLocation = process.argv[3];
var http = require('http');
var fs = require("fs");


var server = http.createServer(function (req, res){
    var readStream = fs.createReadStream(fileLocation);
    readStream.on("open",function(){
        readStream.pipe(res);
    });
    readStream.on("error",function (err){
        res.end(err);
    });
});
server.listen(port);
     
     */
