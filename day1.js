const  fs= require('fs');

fs.readFile("./input.txt","utf-8",(err,data)=>{

    console.log(data.split("\r\n"));


})