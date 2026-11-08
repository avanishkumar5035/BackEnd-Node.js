let fs = require('fs');
let path = __dirname+'data.txt';

fs.writeFile(path,"learning fs module", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("done successfully");
    }
});