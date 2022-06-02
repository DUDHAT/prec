const mongoose = require("mongoose")

const C_details = new mongoose.Schema({
    user_id:{type:String, default:Math.floor((Math.random() * 100000000)),unique:true},
    cart_date:{ type: String},
    updated_date:{ type: String},
    product_name:{ type: String},
    product_size:{ type: String},
    product_price:{ type: String}
})

const cart = new mongoose.model("C_details", C_details);

module.exports = cart;