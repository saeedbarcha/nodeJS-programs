//****** saeed barcha  date mm-dd-yyyy 6-10-2021

//importing fs module
const fs=require("fs");

//creating a folder asynchronously

fs.mkdir("code7",(err) =>{
     console.log("folder is created");
});

//creating file inside folder code7
fs.writeFile("code7/code7.txt" ,"my name is asynchronous file.", (err )=>{
     console.log("no any error")
});

// appending more data to this file
fs.appendFile("code7/code7.txt" , ".....this is appended text." , (err) =>{
 console.log("inserted data into file successfully")
})

// reading data from file 
fs.readFile("code7/code7.txt", "UTF-8" , (err, data) => {
     console.log(data);
     console.log(err);
});

// rename the file
fs.rename("code7/code7.txt","code7/coDe7.txt", (err)=>{
     console.log("rename done");
});

// to delete file inside folder
   // fs.unlink("code7/coDe7.txt",(error)=>{
   //  console.log("file deleted successfully ")
   // })

// to delete folder
  //  fs.rmdir("code7",(error)=>{
  //    console.log("folder deleted successfully  ")
  //  })