const fs = require("fs")

fs.readFile("./one.json", "utf-8", (err, data) => {
    if (err) throw err
    /* console.log(data) */
    console.log(JSON.parse(data))
    /* console.log(JSON.stringify(data)) */
    fs.writeFile("two.json", data, "utf-8", (err) => { if (err) throw err })
})