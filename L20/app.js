let express = require('express');
let app = express();
let mongoose = require('mongoose');
let {Student} = require('./modle/student');


async function connectdb()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/BackEnd-Node");
    console.log("connect to db");
}

connectdb();



app.listen(3000,(req,res)=>{
    console.log("app is running at port 3000");
});
