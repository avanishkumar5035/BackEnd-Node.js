let express = require("express");


let app = express();

app.get("/login",(req,res)=>{
    res.send("this is a / login route");
})

app.listen(3000, ()=>{
    console.log("App is running at port 3000");
})