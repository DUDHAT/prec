const mysql = require("mysql");

//mySQl connect
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "skilldb"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
})

module.exports = con;