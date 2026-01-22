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
})

server.listen(3000,()=>{
    console.log("app is running at port 3000")
})