const express = require("express");
const ejs =  require("ejs");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
extended:true
}));

app.use(express.json())

const register = require("./router/router");
app.use("/",register);

app.set('view engine', 'ejs');

app.set('views', './views')

app.use(express.static('public'))

app.get("/signup", (req,res)=>{
    res.render('register.ejs');
})

app.get("/",(req,res)=>{
    res.render('login.ejs');
})

const port = 5151;
app.listen(port,()=>{
    console.log(`listing port : ${port}`);
});