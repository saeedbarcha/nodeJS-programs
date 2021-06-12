//****** saeed barcha  date mm-dd-yyyy 6-11-2021

////****  creating our own modules  *****///
/// every individual file is known as module in nodejs


// exporting single property or method from a single file//
   
      //***function /
        const add=(num1,num2) => {
                return (num1+num2);
              }
      // exporting function
      // method of exporting single method from a file
      module.exports=add;

      //**** const variable /
      const name="saeed";
      //console.log(name);

      // if we want to use the function in other file then we need to export it first.
      //to export a single property from single file
      // module.exports = name;
      
