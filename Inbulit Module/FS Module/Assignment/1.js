// To read csv file and write into json file 

// At first, we have to create package.json file  (command: npm init -y  ) and 
// then install (command : npm i csvtojson) - This will install node_modules files which contain classes and methods.

const csvtojson = require("csvtojson") 

const fs = require("fs")

/* const csvfilepath = "one.csv" */

csvtojson()                                  // Method  - to convert csv to json format
.fromFile("./one.csv")                       // Another method .fromFile(Consr csvfilepath)
.then((json)=>{console.log(json)
fs.writeFile("one.json",JSON.stringify(json),"utf-8",(err)=>{if(err)throw err})
})




 