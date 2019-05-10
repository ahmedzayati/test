const express = require("express");
const con = require("./connection");
let router = express.Router();
const bcrypt = require("bcrypt");
const app = express();

// default options
router.get("/", (req, res) => {
  const query = "select * from Vehicule ";

  con.query(query, [], function(err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});
router.delete("/:id", (req, res) => {
  const query = "delete from Vehicule where numVehicule=? and numArticle = 1";

  con.query(query, [req.params.id], function(err, result, fields) {
    if (err) throw err;
    res.send(req.params.id);
    console.log("aaa");
  });
});

router.post("/", (req, res) => {
  const {
    description,
    nomProduit,
    prixProduit,
    nomMarque,
    couleur,
    data
  } = req.body;
  console.log(req.body);
  const query =
    "INSERT INTO `Vehicule`( `numArticle`,`nomvehicule`, `nomMarque`,`numMarque`, `couleur`, `prix`,`description`,`path`) VALUES (?,?,?,?,?,?,?,?)";
  con.query(
    query,
    [
      1,
      nomProduit,
      nomMarque,
      1,
      couleur,
      prixProduit,
      description,
      req.files.file.name
    ],
    function(err, result, fields) {
      if (err) throw err;
      console.log(req.body);

      var sampleFile = req.files.file;

      // Use the mv() method to place the file somewhere on your server
      sampleFile.mv(
        "/home/admed/Desktop/pfa2/pfa/public/assets/images/" + sampleFile.name,
        
        function(err) {
          req.body.path=req.files.file.name;
          res.send(req.body);
        }
      );
    }
  );
});








router.put("/", (req, res) => {
  const query =
    "UPDATE `Vehicule` SET `nomVehicule`=?,`nomMarque`=?,`couleur`=?,`path`=?,`prix`=?,`description`=?  WHERE numVehicule=?";
  const {
    nomVehicule,
    nomMarque,
    couleur,
    path,
    prix,
    description,
    numVehicule
  } = req.body;
  con.query(
    query,
    [nomVehicule, nomMarque, couleur, path, prix, description, numVehicule],
    function(err, result, fields) {
      if (err) throw err;
      res.send(req.body);
      console.log(result);
    }
  );
});

module.exports = router;
