const express = require("express");
const app = express();
app.use(express.json())

const register = require("./router/router");
app.use("/register",register);

const port = 5151;
app.listen(port,()=>{
    console.log(`listing port : ${port}`)
});