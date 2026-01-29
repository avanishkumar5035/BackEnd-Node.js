const { render } = require("ejs");
let express = require("express");
let path = require("path");
let app = express();
app.set("view wngine", 'ejs');
app.set('views', path.join(__dirname, "views"));

app.get("/log",(req,res)=>{
    res.render("index");
});

app.listen(4000,()=>{
    console.log("App is running at port 4000");
});