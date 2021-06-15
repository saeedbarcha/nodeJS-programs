//****** saeed barcha  date mm-dd-yyyy 6-14-2021

     // JSON = Javascript Object Notation
     // JSON is a lightweight format for storing data and transproting data.
     // JSON is often use when data is sent from server to a web browser.
 
     //**** object in javascript
     const student={
          name:"saeed",
          age:"1000",
          class:10,
          fee: ()=>{
               return student.class*100;
          }
     };
     // accessing data of this object.
     console.log(student.name);
     console.log(student.age);
     console.log(student.class);
     console.log(student.fee());

//****** converting object into JSON form
     const contToJson= JSON.stringify(student)
     console.log(contToJson);
     // in JSON the keys and values both are written inside double quotes
     // methods inside object skips when convert it into JSON form
     // {"name":"saeed","age":"1000","class":10}
     // can't access the data inside json object using key.
     // console.log(contToJson.name)

//****** to convert JSON data into string/ javascript object form.
     const contToObj=JSON.parse(contToJson);
     console.log(contToObj);
     //now we can access properties of the object (contToObj).

//////////////****** self-Assisment *////////////////

     // object convert to json  
     // add it to a .txt file
     // read from that .txt file 
     // convert it to object
     // console the object   

//**  convert object to json 
     //craeting an object
     const carObj={
          name:"vitz",
          model:"2001",
          color:"maroon"
     };
     // converting object into json
     const carJson=JSON.stringify(carObj);
     console.log(carJson)

//**  add it to a .json file
     // importing fs module to create file
     const fs=require("fs");
      // creating json file inside code16_json folder
     fs.writeFile("code16_json/code16_json.json", carJson ,  (err)=>{
          console.log("data successfully copy to json file")
     });

//**  read data from .json
     const catchData=fs.readFile("code16_json/code16_json.json","UTF-8" , (err,data)=>{
          console.log("successfully catch data from .JSON file");
          console.log(data)
//** converting it to object again
          const jdata=JSON.parse(data); // into object converted 
//** console this object again 
          console.log(jdata)   
     });



