const { render } = require("ejs");
let express = require("express");
let path = require("path");
let app = express();
let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "views"));

let todo=[
    "reading book",
    "Go to Market",
    "coding",
];

app.get("/todo",(req,res)=>{
    res.render("index",{todo: []});
});

// let obj = {
//     id:1212
// }

// app.get("/log",(req,res)=>{
//     res.render("index", {obj});
// });

app.get("/register",(req,res)=>{
    res.render("index");
});

app.post("/register",(req,res)=>{
    console.log(req.body);
    res.send("user register successfully!.. ");
})

app.listen(3000,()=>{
    console.log("App is running at port 4000");
});


