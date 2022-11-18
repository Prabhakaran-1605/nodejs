const fs = require("fs")         // fs --- Class name from class module,  In require("fs") --- "fs" is a Module


fs.readFile("prabhu.txt", "utf-8", (err,a) => {
    if (err) throw err
    console.log(a)
    fs.writeFile("abc.txt",a,"utf-8",(err)=>{if(err)throw err}
)
})

