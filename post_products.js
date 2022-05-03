const express = require("express");
const mongodb = require("mongodb");
const module2 = express.Router();
const skill = mongodb.MongoClient;
module2.post("/", (req, res) => {
    const record = {
        "p_id": req.body.p_id,
        "p_name": req.body.p_name,
        "p_price": req.body.p_price
    }
    // res.json({ "record ": record });
    skill.connect(process.env.CONNECTION_URL, (err, connection) => {

        if (err) throw err;

        else {
            // const db = connection.db(process.env.DATABASE_NAME);

            // console.log(JSON.parse(JSON.stringify(req.body)));
            const db = connection.db(process.env.DATABASE_NAME)


            db.collection(process.env.COLLECTION_NAME).insertOne(record, (err, result) => {
                if (err) {

                    console.log(err);
                }
                else {
                    res.send("Record inserted successfully");
                }
            })
        }
    })
})

module.exports = module2;


// res.json({ "record ": record });