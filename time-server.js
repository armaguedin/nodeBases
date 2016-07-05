     var net = require('net')  
       
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
       
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  
     
     
     /*
     
     var net = require('net');

var server = net.createServer(function (socket){
    var date = new Date();
    var dateFormat = date.getFullYear()+"-"+zerroFilled(date.getMonth()+1)+"-"+zerroFilled(date.getDate())+" "+date.getHours()+":"+date.getMinutes()+"\n";
    socket.end(dateFormat);
    
});
server.listen(process.argv[2]);

function zerroFilled(num){
    if(num<10) return "0"+num;
    else    return ""+num;
}
     
     */
