//****** saeed barcha  date mm-dd-yyyy 6-13-2021

////****  wrapper function  *****///

const fs=require("fs");
const os=require("os");

const frnd ="raiees";
const location="rahimabad";
const age="14";

function sub(a,b){
     return (a-b);
}
function divide(a,b){
     return (a/b);
}
function multi(a,b){
     return (a*b);
}

//   ***** ES6 syntex of exporting modules
module.exports={age,frnd,location,multi,divide,sub}

//  *******
//every file in node.js is know as module
// all the propertie methods inside this file is private. we can't use thes variables, properties and methods in another file. 

//**** we can't use code inside file to another file it is just because of wrapper function */

// suppose this is our file contains line of code
 const a="aaa";
 const b="bbb";

//  nodejs bind wrapper function with this code
(function (){
     const a="aaa";
     const b="bbb";
     console.log(a+b)
     // these variable/what ever inside this function is limited to this function.
     // we can't access any line of code outside this function /file
})();

//***  node.js wrapper function */
     //(function (exports, require, module, __filename, __dirname) {
          //module code
          // we can importing modules from outside word require pass in the parameter of this function.
     // const fs=require("fs");
     // const name1="barcha"
     // exporting properties and methods 
     // module.exports.NameToAccessWhileImporting=property/methodName;
     // module.exports.name1=name1;     
     //  });

//***accessing parameters of wrapper function
   //(function (exports, require, module, __filename, __dirname) {
        //module code   
     //  });

// **** __filename
     console.log(__filename);
     //returns this => /home/saeed/Documents/nodejs/code13_mod_wrapper_function.js


// **** __dirname
console.log(__dirname);
//returns this => /home/saeed/Documents/nodejs

console.log(module);
console.log(require);
console.log(exports);
