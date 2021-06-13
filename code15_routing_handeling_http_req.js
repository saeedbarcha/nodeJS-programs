//****** saeed barcha  date mm-dd-yyyy 6-13-2021

//*******     handeling request on the server.    *****// 

const http=require("http");
// console.log(http); //will  show all the properties and methods this http module contains

//**** */ importing url module
const url=require("url");

//****  creating our own server  ****//

const server=http.createServer(( req , res )=>{
     if (req.url== "/"){
          res.end("hello.......... ")
     }else if(req.url== "/home"){
          res.end("this page is home")
     }
     else if(req.url== "/contact"){
          res.end("this is contains contact information")
     }
     else if(req.url== "/about"){
          res.end("this page contains information all about this site")
     }else{
          res.writeHead(404,{"content-type" : "text/html"})    // to change the type of this document file into html
     res.end("<h1>404 this page doesn't exist</h1>"); // to change this file content into html.
      }

     console.log(req.url); // this will show the search url for server

     });

/// for listening request on server
server.listen(8000,"127.0.0.1", ()=>{
     console.log("listening to the port no 8000");
});

//*****   this is same
//     const server=http.createServer((req,res)=>{
//           console.log(req.url);
//           res.end("Hello from server.hahahhahahhahahahaha");
//           }).listen(8000,"127.0.0.1", ()=>{
//                console.log("listening to the port no 8000");
//           });
     


