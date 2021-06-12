//****** saeed barcha  date mm-dd-yyyy 6-11-2021

////****  creating our own modules  *****///

// exporting multiple properties and methods from a single file//

     const frnd ="raiees";
     //exporting
     module.exports.frnd=frnd;

     const location="rahimabad";
     //exporting
     module.exports.location=location;
     const age="14";
     //exporting
     module.exports.age=age;

     function sub(a,b){
          return (a-b);
     }
     //exporting
     module.exports.sub=sub;

     function divide(a,b){
          return (a/b);
     }
     //exporting
     module.exports.divide=divide;

     function multi(a,b){
          return (a*b);
     }
     //exporting
     module.exports.mult=multi;


//   ***** ES6 syntex of exporting modules
//module.exports={age,frnd,location,multi,divide,sub}