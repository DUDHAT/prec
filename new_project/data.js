const express = require("express");
const app = express();
const mongoose = require("mongoose");
const controller = require("./controller")

// const module1 = express.Router();
mongoose.connect("mongodb://localhost:27017/skillqode_meet")



const register = express.Router();
register.post("/signup", controller.signup)
register.post("/login", controller.login)
// register.put("/updat", controller.update)
// register.delete("/delete", controller.delete)

module.exports = register;