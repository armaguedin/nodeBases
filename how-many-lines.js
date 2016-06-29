     /*
      program that uses a single synchronous filesystem operation to  
      read a file (process.argv[2]) and print the number of newlines (\n) it contains to the  
      console (stdout), similar to running cat file | wc -l
    */
     
     var fs = require('fs')  
       
     var contents = fs.readFileSync(process.argv[2])    //contents is a Buffer Object
     var lines = contents.toString().split('\n').length - 1  
     console.log(lines)  
       
     // note you can avoid the .toString() by passing 'utf8' as the  
     // second argument to readFileSync, then you'll get a String!  
     //  
     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1 
