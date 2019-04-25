

var mysql = require('mysql');





var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "PFA"
  },
  console.log("cnx"));

module.exports= con;