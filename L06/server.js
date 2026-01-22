let http = require("http");

let server = http.createServer((req,res)=>{
    res.write("learing node js http to create server");
    res.end();
})

server.listen(3000,()=>{
    console.log("Server is running at port 3000");
});
