//****** saeed barcha  date mm-dd-yyyy 6-17-2021

// streams in javascript
     // streams are objects that let you read data from a source or write data to a destination in continuous fashion.in node.js ,there are four types of streams - ////streaming means listining to music or watching video in 'real time',instead of downloading a file to your computer and watching it later.


     // Readable => stream  which is used for read operation.
     // Writable => stream which is used for write operation.
     // Duplex => Stream which can be used for both read and write operation.
     // transform => a type of duplex stream where the output is computed based on input.

     //////////////////////////////////////////////

     //each type of streams is an eventemitter instance and throws several events at different instance of times. for example  some of the commonly used events are -
      
     // data => this event is fired when there is data is available to read.
     // end => this event is fired when there is no more data to read.
     // error =>this event is faired when there is any error receving or writing data.
     // finish => this event is faired when all the data has been flushed to underlying system.

     /////////////// streams ///////////////
     //fst way: 
     //to read data from .txtx file present in this folder code19_streams

     const fs=require("fs");
     const http=require("http");

     // create server 
     const server=http.createServer();
      server.on("request", (req,res)=>{
     //     var fs=require("fs");
         fs.readFile("code19_streams.txt" , (err ,data)=>{
              if (err) return console.console.error((error));
              res.end(data.toString());
         })

      });
     // to listing on port no
     server.listen("8000", "127.0.0.1",()=>{
          console.log("your server is listining")
     })
     // 2nd way: 
     // reading from a stream
     // creat a file readable stream
     // handle stream events => data,end and error

    
    
     // const fs=require("fs");
     // fs.writeFileSync("code4.txt", "file created inside folder."); //
     // console.log(fs.readFileSync("code4/code4.txt"));
     // console.log("hello! my name is barcha");




