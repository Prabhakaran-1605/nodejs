// fs Module - To perform read and write operation 

const fs = require("fs")          
// Here instead of fs we can use any variable name, and this is applicable only in default method not in named

// At First, we have to create txt file in this folder which contain some txt content in it

// We can write synchronous and asynchronous code in fs Module

// Synchronous

let data = fs.readFileSync('prabhu.txt','utf-8');
console.log(data)

// ASynchronous

fs.readFile("prabhu.txt","utf-8",(err,data)=>{ if(err){throw err}else {console.log(data)}})





