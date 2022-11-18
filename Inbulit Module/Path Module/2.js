const fs = require("fs")

const path = require("path")


fs.readFile(path.join(__dirname,"files","json document","one.json"),"utf-8",(err,data)=>

{
    if(err)throw err
    console.log(data)
    fs.writeFile("two.json",data,"utf-8",(err)=>{if(err)throw err})

})