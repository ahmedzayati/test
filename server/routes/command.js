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
 

  router.get("/:cin", (req, res) => {
    const query = "SELECT * FROM `association8`, `commandes`,`Clients`,`Vehicule` where commandes.numCommande=association8.numCommande and Clients.cin=commandes.cin and association8.numVehicule=Vehicule.numVehicule and Clients.cin=?";
  
    con.query(query, [parseInt(req.params.cin)], function(err, result, fields) {
      if (err) throw err;
      res.send(result);
      
    });
  });


router.post("/", (req, res) => {
  const { adresseCmd, pays, ville, telephoneCmd, zip, cin, numVehicule } = req.body;
  const query =
    "INSERT INTO `commandes`( `cin`, `adresseCmd`,`date`, `pays`, `ville`, `telephoneCmd`, `zip`,`pathCmd`,`etat`) VALUES (?,?,?,?,?,?,?,?,?)";

  con.query(
    query,
    [
      cin,
      adresseCmd,
      new Date(),
      pays,
      ville,
      telephoneCmd,
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
        "/home/admed/Desktop/pfa2/pfa/public/assets/files/" + req.files.file.name,

        function(err) {
          console.log("cmd passed")
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


router.delete("/:order", (req, res) => {
  const query = "DELETE FROM `commandes` WHERE numCommande=?";

  con.query(query, [parseInt(req.params.order)], function(err, result, fields) {
    if (err) throw err;
    res.sendStatus(200);
    
  });
});


module.exports = router;
