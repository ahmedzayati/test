var mysql = require("mysql");

var con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "PFA2",
    port: 3002
  },
  console.log("cnx")
);

module.exports = con;
