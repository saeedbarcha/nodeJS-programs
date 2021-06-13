//****** saeed barcha  date mm-dd-yyyy 6-13-2021

//to create our own server we need to import http module. 

const http=require("http");
// console.log(http); //will  show all the properties and methods this http module contains
const fs=require("fs");
// console.log(fs) //will  show all the properties and methods this fs module contains

//****  creating our own server  ****//

const server=http.createServer((req,res)=>{

res.end("Hello from server");
});

server.listen(8000,"127.0.0.1", ()=>{
     console.log("listening to the port no 8000");
});