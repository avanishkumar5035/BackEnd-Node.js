let http = require("http");
let server = http.createServer((req,res)=>{
    console.log(req.headers);
    console.log(res.headers);
    res.statusCode = 201;
    res.write("learning https server");
    res.end();
})

server.listen(4000,()=>{
    console.log("Server is running on port 4000");
})