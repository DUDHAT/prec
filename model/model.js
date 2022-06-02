const mongoose = require("mongoose")

const userdata = new mongoose.Schema({
    name:{type:String, required:true},
    email: { type: String, required:true},
    password: { type: String, required:true},
    rpassword: { type: String, required:true},
    roll_no:{type: String,default:0}
})

const userModel = new mongoose.model("userdata", userdata);

module.exports = userModel;