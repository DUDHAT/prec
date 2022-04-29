const express = require("express");
const mongodb = require("mongodb");
const module3 = express.Router();
const skill = mongodb.MongoClient;
module3.put("/", (req, res,next) => {
  
            const connection = req.db
            const db = connection.db(process.env.DATABASE_NAME);
            db.collection(process.env.COLLECTION_NAME)
                .updateOne({ "p_id": req.body.p_id }, {
                    $set: {
                        "p_name": req.body.p_name,
                        "p_price": req.body.p_price
                    }
                }, (err, result) => {
                    if (err) throw err;
                    else {
                        res.send({ "msg": "record updated successfully" });
                    }
                })

        }
    

)
module.exports = module3;