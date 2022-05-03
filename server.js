const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const module1 = require("./get_products");
app.use("/get_product", module1);

const module2 = require("./post_products");
app.use("/post_product", module2);

let port = process.env.PORT || 5150;
app.listen(port, () => {
    console.log(`sever listening in port no ${port}`);
});

