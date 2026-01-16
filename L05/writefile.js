let fs = require("fs");


let path = __dirname+"/data.txt";

fs.writeFile(path,"learing node js system",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("Done Successfully...")
})
// console.log(__dirname);
// fs.writeFile()