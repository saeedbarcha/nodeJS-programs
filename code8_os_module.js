//****** saeed barcha  date mm-dd-yyyy 6-11-2021

//**** os module nodejs.
//the os module provides operating system related utility methods and properties.

// way of importing os module

const os=require("os");

//to find version of operating system (os)
const version=os.arch()
console.log(version)

//**** to find free memory in ram
const freemem=os.freemem(); // this value is in bytes
console.log(freemem)
//to convert it into GB
console.log(`${freemem / 1024 / 1024 / 1024} `) //4. something ram is free

//**** to find total memory.
const totalmem=os.totalmem(); // this value is in bytes
console.log(totalmem)
//to convert it into GB
console.log(`${ totalmem / 1024 / 1024 / 1024 } `) //4. something ram is free

//to find host name
const hostname=os.hostname(); 
console.log(hostname);// will return host name(saeed-Latitude-E6540)

//to find plateform
const plform=os.platform(); 
console.log(plform);// will return os system bit(32 or 64 bit)

//to find the directory of temp folder
const tempFolder=os.tmpdir(); 
console.log(tempFolder);// will return the path of temp folder.

//to find the dtype of operating system.
const ostype=os.type(); 
console.log(ostype);// will return type of operating system

