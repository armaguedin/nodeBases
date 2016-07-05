     var http = require('http')  
     var url = require('url')  
       
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
       
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2]))  
     
     
     
     
     
     /*
     var http = require("http");
var url  = require("url");

var server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'application/json'});
    var urlObj = url.parse(req.url, true); 
    
    if(urlObj.pathname == '/api/parsetime'){
        if(urlObj.query['iso']){
            var date = new Date(urlObj.query['iso']);
            var json = {"hour":date.getHours(),"minute":date.getMinutes(),"second":date.getSeconds()};
            res.end(JSON.stringify(json));
        }
    }    
    
    if(urlObj.pathname == '/api/unixtime'){
        if(urlObj.query['iso']){
            var date = new Date(urlObj.query['iso']);
            var json = {"unixtime":date.getTime()};
            res.end(JSON.stringify(json));
        }
    }
    res.end("hello");
});

server.listen(process.argv[2]);
     
     */
