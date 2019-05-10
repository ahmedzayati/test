const express = require("express");
const con = require("./connection");
let router = express.Router();
const bcrypt = require("bcrypt");


router.get("/", (req, res) => {
    const query = "SELECT * FROM `association8`, `commandes` where commandes.numCommande=association8.numCommande ";
  
    con.query(query, [], function(err, result, fields) {
      if (err) throw err;
      res.send(result);
    });
  });
 


router.post("/", (req, res) => {
  const {
    adresse,pays,ville,telephone,zip,cin,numVehicule
  } = req.body;
  const query = "INSERT INTO `commandes`( `cin`, `adresse`,`date`, `pays`, `ville`, `telephone`, `zip`,`path`) VALUES (?,?,?,?,?,?,?,?)";

  con.query(query, [cin,adresse,new Date(),pays,ville,telephone,zip,req.files.file.name], function(err, result, fields) {
    if (err) throw err;
    const query2="INSERT INTO `association8`(`numCommande`, `numVehicule`, `nbArticle`) VALUES (?,?,?)";
    con.query(query2,[result.insertId,numVehicule,1])
    req.files.file.mv(
        "/home/admed/Desktop/pfa2/pfa/public/assets/files/" + req.files.file.name,
        
        function(err) {

          req.body.path=req.files.file.name;
          res.send(req.body);
        }
      );
      
   
  });
});


module.exports = router;
