const { number } = require("framer-motion");
const mongoose = require("mongoose");

let {Schema} = mongoose;

let student = new Schema({
    age:Number,
    grade:String,
    marks:Number,
    name: String,
    mobile: BigInt,
    address: String,
    aadhar: Number

})

let Student = mongoose.model('Student', student);
module.exports(student);