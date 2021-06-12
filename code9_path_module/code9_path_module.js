//****** saeed barcha  date mm-dd-yyyy 6-11-2021

     //**** importing  path  module.

     const path=require("path");
     
     //**** to find path name
     const pathName=path.dirname("/home/saeed/Documents/nodejs/code9_path_module/code9_path_module.js"); //way of initilizing path into a variable using .dirname() method
     console.log(pathName);

     //*** to find extention of current file name
     console.log(path.extname("/home/saeed/Documents/nodejs/code9_path_module/code9_path_module.js"));//return .js

     //*** to find current file name
     console.log(path.basename("/home/saeed/Documents/nodejs/code9_path_module/code9_path_module.js"));//will return code9_path_module.js

   
  //*** to find multipe properties of file
     //will return these all at once in the form of object
       //(1) file name .basename()
       //(2) file extention .extname()
       //(3) directory name .dirname()
       //(4) root name .rootname()
     console.log(path.parse("/home/saeed/Documents/nodejs/code9_path_module/code9_path_module.js"));
     
 //****  initilizing this value to a variable

     const myPathObj=path.parse("/home/saeed/Documents/nodejs/code9_path_module/code9_path_module.js");
     console.log(myPathObj);
 // now we can access the properties inside object easily
     console.log(myPathObj.root);
     console.log(myPathObj.name);
     console.log(myPathObj.base);
     console.log(myPathObj.ext);

