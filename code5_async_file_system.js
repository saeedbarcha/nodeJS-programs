//****** saeed barcha  date mm-dd-yyyy 6-9-2021

//*** importing modules
const fs=require("fs");

//*** creating async file inside any folder
//***  takes 3 parameters 
//*** (1) file path
//*** (2) data inside file
//*** (3) callback

     fs.writeFile("code5.txt" ,"this is my Asyncfile.",
     //callback function 
     (err)=>{console.log("file is created successfully :)")
          console.log(err);//null will return it is just because of there is no any value in error
          }
     );

     console.log("line after async file created")
//appending some data in asyncFile

fs.appendFile("code5.txt"," => appended data in AsyncFile", (error1)=>{
     console.log("successfuly data appended into asyncFile.")
     console.log(error1);

});

//***
console.log("after appending asyncFile");

//***  to read asyncFile
//***  utf-8 to convert ninary data into highlevel language
fs.readFile("code5.txt", "UTF-8", (err,data)=>{
     console.log("data is read from asyncFile successfully.");
     console.log(data);
     if(data==null){
          console.log("file is missing");
     }
});