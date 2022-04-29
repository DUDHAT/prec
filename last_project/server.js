const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const module1 = require("./get_products");
app.use("/get_products",module1);

let port = process.env.PORT || 5151;
app.listen(port,()=>{
    console.log(`server listening the port number ${port}`)
})