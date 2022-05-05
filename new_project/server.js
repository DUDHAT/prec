const express = require("express")
const app = express();

app.use(express.json())
// const module = require("module")

const register = require("./data")
app.use("/enter", register)

let port = process.env.PORT || 6969
app.listen(port, () => {
    console.log(`port is ${port}`)
})