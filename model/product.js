const mongoose = require("mongoose")

const P_details = new mongoose.Schema({
    product_Name : { type: String, required:true},
    product_details : { type: String, required:true},
    product_price: { type: String, required: true},
    product_content : { type: String, required: true},
    product_URL: { type: String, required: true}
})

const product = new mongoose.model("P_details",P_details);

module.exports = product;