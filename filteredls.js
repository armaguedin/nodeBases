     var fs = require('fs')  
     var path = require('path')  
       
     var folder = process.argv[2]  
     var ext = '.' + process.argv[3]  
       
     fs.readdir(folder, function (err, files) {  
       if (err) return console.error(err)  
       files.forEach(function(file) {  
           if (path.extname(file) === ext) {  
               console.log(file)  
           }  
       })  
     })  
     
     
     
     /*
     
     const path = require('path');

var fs = require('fs');
var directory_name = process.argv[2];
var file_extension = process.argv[3];
fs.readdir(directory_name, callback)
function callback(err, list){
    if(err) console.log(err);
    for(var i in list){
        if(path.extname(list[i]) == ('.'+file_extension))
         console.log(list[i]);
    }
}

*/
