//****** saeed barcha  date mm-dd-yyyy 6-10-2021

const fs = require("fs");

//**** synchoronous programing 
//**** line by line execution
console.log("lines before creating file through synchoronous method.")
fs.writeFileSync("code6.txt", "my name is saeed hussain barcha.");
console.log("code of lines after created file through synchoronous method.")
 
//appending some more text into file
 fs.appendFileSync("code6.txt"," =====>(i am 100 years old) appended text in file (code6.txt).");
 console.log("code of line after appending data into (code6.txt) file ")

 //creating variable and initilizing value in it.
const Data=fs.readFileSync("code6.txt","utf-8");
console.log("lines after reading data from file synchronously");
console.log(Data);
console.log("line after printing data.")

//****   Asynchoronous programing   *****
fs.readFile("code6.txt", "UTF-8", (err, data) => {
console.log(data);
console.log(err); 
});

console.log("after data read asynchronously from file code6.txt");
//this line will execute first

