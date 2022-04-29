const express = require("express");
const mongodb = require("mongodb");
const module4 = express.Router();
const skill = mongodb.MongoClient;
module4.delete("/", (req, res, next) => {
   const connection = req.db
            const db = connection.db(process.env.DATABASE_NAME);
            db.collection(process.env.COLLECTION_NAME).deleteOne({ "p_id": req.body.p_id }, (err, result) => {
                if (err) throw err;
                else {
                    res.send({ "msg": "record deleted successfully" });
                }
            })

       
})
module.exports = module4; 