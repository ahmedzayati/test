const express = require("express");
const con = require("./connection");
let router = express.Router();
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    const query = "SELECT * FROM `association8`, `commandes`,`Clients`,`Vehicule` where commandes.numCommande=association8.numCommande and Clients.cin=commandes.cin and association8.numVehicule=Vehicule.numVehicule";
  
    con.query(query, [], function(err, result, fields) {
      if (err) throw err;
      res.send(result);
    });
  });
 

 


router.post("/", (req, res) => {
  const { adresse, pays, ville, telephone, zip, cin, numVehicule } = req.body;
  const query =
    "INSERT INTO `commandes`( `cin`, `adresse`,`date`, `pays`, `ville`, `telephone`, `zip`,`path`,`etat`) VALUES (?,?,?,?,?,?,?,?,?)";

  con.query(
    query,
    [
      cin,
      adresse,
      new Date(),
      pays,
      ville,
      telephone,
      zip,
      req.files.file.name,
      "On Hold"
    ],
    function(err, result, fields) {
      if (err) throw err;
      const query2 =
        "INSERT INTO `association8`(`numCommande`, `numVehicule`, `nbArticle`) VALUES (?,?,?)";
      con.query(query2, [result.insertId, numVehicule, 1]);
      req.files.file.mv(
        "/home/abla/pfa/test/public/assets/files/" + req.files.file.name,

        function(err) {
          req.body.path = req.files.file.name;
          res.send(req.body);
        }
      );
    }
  );   
});

router.put("/confirm/:numCommande", (req, res) => {
  const query = "UPDATE `commandes` SET `etat` = 'confirm' WHERE numCommande=?";

  con.query(query, [req.params.numCommande], function(err, result, fields) {
    if (err) throw err;
    res.send(req.params.numCommande);
    console.log(result);
  });
});
router.put("/decline/:numCommande", (req, res) => {
  const query = "UPDATE `commandes` SET `etat` = 'decline' WHERE numCommande=?";

  con.query(query, [req.params.numCommande], function(err, result, fields) {
    if (err) throw err;
    res.send(req.params.numCommande);
    console.log(result);
  });
});

module.exports = router;
