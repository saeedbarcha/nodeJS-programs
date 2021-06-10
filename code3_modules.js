//****** saeed barcha  date mm-dd-yyyy 6-8-2021

// node.js has a set of build-in modules which you can use these in our code by importing them.

//creating and initilizing a variable

const name="saeed barcha";
 console.log(name);

//**** importing modules (keyword require)
  const fs=require("fs"); //this module makes us able to create a file and insert data init.
   fs.writeFileSync("code3.txt", "First created file using mode modules"); //writeFileSync is method to create file .it takes two arguments first one is name of file and second one if data inside the file.file extention need to write while writing file name in first argument.

//****updating the txt file 
   fs.writeFileSync("code3.txt", "First created file using node modules by saeed barcha rahimabadi");

//***** to add some more text to .txt file not removing the previous data
//***** to perform this function we need to add another module
//***** appendFileSync method to add some data inside txtx file which already contains some data.
   fs.appendFileSync("code3.txt", " => Appeding text in txt file");

//***** to read data from txt file.
   //fs.readFileSync("code3.txt")
   // takes one argumrnt and we have to put file name.

//****   buffer 
  //node js includes an additional data type called Buffer (not available in browser's javascript).
  //Buffer is used to store binary data, while reading from a file or receiving packets over the network.

  const buf_data=fs.readFileSync("code3.txt");
  //*** to show the buf_data value in console
  console.log(buf_data);
  //*** output in console
  //*** <Buffer 46 69 72 73 74 20 63 72 65 61 74 65 64 20 66 69 6c 65 20 75 73 69 6e 67 20 6e 6f 64 65 20 6d 6f 64 75 6c 65 73 20 62 79 20 73 61 65 65 64 20 62 61 72 ... 43 more bytes>

  let org_data=buf_data.toString(); // converting binary data into string form 
 console.log(org_data);

 //***** renaming file name
//fs.renameSync("oldName.txt" ,"newname.txt")