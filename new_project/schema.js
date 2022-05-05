const mongoose = require("mongoose");

const userdata = new mongoose.Schema({
    email: { type: String },
    password: { type: String }

})

const userModule = new mongoose.model("userdata",userdata)

module.exports = userModule;