//****** saeed barcha  date mm-dd-yyyy 6-13-2021

//*******   creating  user API.    *****// 

//***** importing modules
     const fs = require("fs");
     const http=require("http");
     const path  = require("path");
     const url=require("url");

//****  creating  server  ****//

const server=http.createServer(( req , res )=>{

     const data= fs.readFileSync("userapi.json","utf-8") 
     const jdata=JSON.parse(data); 

     if (req.url== "/"){
          res.end("hello.......... ");
     }else if(req.url== "/userapi"){
                    res.end(jdata[3].title);// printing single property of an object inside array               
     }else{
          res.writeHead(404,{"content-type" : "text/html"});
          res.end("<h1>404 this page doesn't exist</h1>");
      }
     console.log(req.url); 
     });

server.listen(8000,"127.0.0.1", ()=>{
     console.log("listening to the port no 8000");
});



