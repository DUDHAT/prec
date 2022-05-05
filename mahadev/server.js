const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect("mongodb://127.0.0.1:27017/mydb",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{console.log("succfuly connected")})
.catch(()=>{console.log(err)});

const db = mongoose.connection



app.post("/singin",(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const cpassword = req.body.cpassword

    data = {
        "name":name,
        "email":email,
        "password":password,
        "cpassword":cpassword
    }
    db.collection("user").insertOne(data,(err,con)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(password === cpassword)
            {
                console.log("record insert succfully");
                return res.redirect('message.html')
            }
            else
            {
                res.send(err)
            }
        }
    })
})


app.post("/login",async(req,res)=>{
  try{
    const  email = req.body.email 
    const  password = req.body.password
    console.log(`${email}and${password}`) 
   const useremail = await db.collection("user").findOne({email:email})
//    res.send(useremail);
//    console.log(useremail);
    if(useremail.password===password)
    {
        return res.redirect('deshbord.html')
    }
    else{
        res.send("invelid password");
    }

  }
  catch{
    res.send("invelid Email");
  }
})

app.listen(5151,()=>{
    console.log("server listing port 5151");
})