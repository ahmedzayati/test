var mysql = require("mysql");

var con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "PFA2"
  },
  console.log("cnx")
);

module.exports = con;
