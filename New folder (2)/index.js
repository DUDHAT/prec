var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://127.0.0.1:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var products_name = req.body.products_name;
    var Product_id = req.body.Product_id;
    var Product_number = req.body.Product_number;
    var price = req.body.price;

    var data = {
        "products_name": products_name,
        "Product_id" : Product_id,
        "Product_number": Product_number,
        "price" : price
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    // return res.redirect('pro_success.html')
})

.listen(3000);


console.log("Listening on PORT 3000");