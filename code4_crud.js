//****** saeed barcha  date mm-dd-yyyy 6-9-2021

//*** importing modules
const fs = require("fs");

//***   creating folder
fs.mkdirSync("code4");

//***   creating file
//fs.writeFileSync("code4.txt", "this is method to create file"); //

//*** to create file inside this folder (code4_crudFolder)
fs.writeFileSync("code4/code4.txt", "file created inside folder."); //

//*** adding more data to file
fs.appendFileSync("code4/code4.txt", "added text  hahahahhahahahahhhahahah")

//*** module to read data from file


//*** we have ti initilize it a variable
//const readMyFile=fs.readFileSync("code4_crudFolder/code4_file.txt");
console.log(fs.readFileSync("code4/code4.txt"));

//*** to rename file 
//fs.renameSync("code4/code4.txt","code4/code4_renamed_file.txt")

//*** to delete file 
//fs.unlinkSync("code4/code4.txt")

//*** to delete folder
//fs.rmdirSync("code4")
