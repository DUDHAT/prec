const userModel = require("../model/model");
const product = require("../model/product");
const cart = require("../model/cart");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

exports.signup = (async (req, res) => {

        if(req.body.password === req.body.rpassword)
        {
            await userModel.create(req.body).then(data =>console.log(data),res.render('login.ejs')).catch(e => console.log(e));
        }
        else
        {
            res.send("password and cpassword are not match");
        }
    }
);

exports.login = (async (req, res) => {
        const email = req.body.email
        let password = req.body.password
        console.log(email);
        console.log(password);
        let useremail = await userModel.findOne({ email: email })
    
        console.log(useremail);
        console.log(req.body.password)
        if (useremail.password === password) 
        {
            console.log(useremail.password);
            console.log("login success full");
           return res.render('deshboard')
        }
        else 
        {
            res.send("inved password");
        }
});

exports.product_details = (async (req, res) => {
        await product.create(req.body).then(data => res.send(data)).catch(e => res.send(e));
})

exports.product_details_update = (async (req, res) => {
        await product.updateOne({product_Name : req.body.product_Name},{$set:{product_details:req.body.product_details,
            product_price:req.body.product_price,product_content:req.body.product_content}})
        .then(data => (data.modifiedCount == 0) ? res.json({ "msg": "not modified" }) : res.json({ "msg": "updated..." }))
        .catch(e => console.log(e))
})

exports.product_details_delete= (async(req, res) => {
        await product.deleteOne({product_Name : req.body.product_Name}).then(data => (data.deletedCount == 0) ? res.json({ "msg": "not deleted" }) : res.json({ "msg": "deleted..." }))
        .catch(e => console.log(e))
});


exports.cart_details_insert = (async (req, res) => {
    await cart.create(req.body).then(data => res.send(data)).catch(e => res.send(e));
})

exports.cart_details_update = (async (req, res)=>{
   await cart.updateOne({user_id : req.body.user_id},{$set:{cart_date:req.body.cart_date,updated_date:req.body.updated_date}})
   .then(data => res.send(data)).catch(e => res.send(e));
 
})

