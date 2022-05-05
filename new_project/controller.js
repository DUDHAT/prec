const express = require("express");
const app = express();

app.use(express.json());

const userModule = require("./schema")


exports.signup = (async (req, res) => {
    await userModule.insertMany(req.body).then(data => res.send(data)).catch((err) => { throw err })
})

exports.login = (async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const useremail = await userModule.findOne({ email: email })
    if (useremail.password === password) {
        res.send("login succfull")
    }
    else {
        res.send("inved password")
    }
    // await userModule.find({email==req.body.email})
})