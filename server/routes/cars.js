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
    console.log(result);
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
      var sampleFile = req.files.file;

      // Use the mv() method to place the file somewhere on your server
      sampleFile.mv(
        "/home/abla/pfa/test/public/assets/images/" + sampleFile.name,
        req,
        function(err) {
          res.status(200).json(req.body);
          console.log("1");
        }
      );
    }
  );
});

router.post("/upload", (req, res) => {
  console.log(req.body);
  var sampleFile = req.files.file;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv("./img/" + sampleFile.name, req, function(err) {
    const { nomProduit, prixProduit } = req.body;

    const query = "INSERT INTO `Vehicule`( `nomVehicule`,`prix`) VALUES (?,?)";
    con.query(query, [nomProduit, prixProduit], function(err, result, fields) {
      if (err) throw err;

      res.status(200).json(req.body);
    });
  });
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
