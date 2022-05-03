const express = require("express");
const module1 = express.Router();
const mongodb = require("mongodb");
const skill = mongodb.MongoClient;
module1.get("/", (req, res) => {
    skill.connect(process.env.CONNECTION_URL, (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db(process.env.DATABASE_NAME, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            db.collection(process.env.COLLECTION_NAME).find().toArray((err, array) => {
                if (err) throw err;
                else {
                    res.send(array);
                }
            })
        }
    })
})
module.exports = module1;