const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require("cors");
app.use(cors());

app.use(express.json());

var mongoExpressReq = require("mongo-express-req")
app.use(mongoExpressReq(process.env.CONNECTION_URL))

const module1 = require("./get_products");
app.use("/get_products", module1);

const module2 = require("./post_products")
app.use("/insert", module2);

const module3 = require("./update_products");
app.use("/update", module3);

const module4 = require("./delete_products");
app.use("/delete", module4);

let port = process.env.PORT || 5151;
app.listen(port, () => {
    console.log(`server listening the port number ${port}`);
})
