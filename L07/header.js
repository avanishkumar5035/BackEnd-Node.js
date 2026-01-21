const http = require("http");

const server = http.createServer((req,res)=>{
    console.log(req.header);
    console.log(res.header);
    res.statusCode=204;
    res.write("http server");
    res.end();

});

server.listen(3000, ()=>{
    console.log("App is working fine on port 3000")
});