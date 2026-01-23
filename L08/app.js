let http = require("http");

let server = http.createServer((req,res)=>{
    let secret = "this is a secret";
    let header = req.headers.Authorization;

    if(!header){
        res.statusCode = 401;
        res.write("kindly enter header value first");
        res.end();
        return;
    }
    if(header == secret){
        res.statusCode = 201;
        res.write("Welcome user");
        res.end();
        return;
    }
    else{
        res.statusCode = 402;
        res.write("Invalid user");
        res.end();
        return;
    }
})

server.listen(3000,()=>{
    console.log("app is running at port 3000")
})