const express = require("express");
const app = express();
const controller = require("../controller/controller")

const register = express.Router();

register.post("/insert",controller.insert);
register.get("/find", controller.find);
register.put("/update", controller.update)
register.delete("/delete", controller.delete)
// register.get("/orderby", controller.orderby)

module.exports = register;