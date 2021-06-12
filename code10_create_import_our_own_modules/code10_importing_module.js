//****** saeed barcha  date mm-dd-yyyy 6-11-2021 ******////


////******    importing single property or methods from silgle file  //////
//****  I will use this file to import the module created in the file (code10_create_module)

//importing module
     const add = require("./code10_crtModule_export_single_prop_method.js")
     console.log( add(10,20) );

//to importing variable (name) .we have to export that variable first.
// console.log(name); 



////******    importing multiple properties and methods from same file   ******//////

     const second = require("./code10_export_multiple_prop_method")

     //this line will return all the properties and methods from imported file in the form of object.
     console.log(second);
     // now we can use all the properties and methods inside this object (second)
     console.log(second.age);
     console.log(second.location);
     console.log(second.frnd);
     console.log(second.sub(10,2));
     console.log(second.mult(2,3));
     console.log(second.divide(10,2));

// *********** ES6 syntex of importing properties and methods
    const {age,location,frnd,sub,mult,divide} = require("./code10_export_multiple_prop_method");
    // in ES6 we dont need to write name of object which inherit app the properties and methods
    //now we can access the properties and methods by there name.
    console.log(age);
    console.log(location);
    console.log(frnd);
    console.log(sub(10,2));
    console.log(mult(2,3));
    console.log(divide(10,2));

