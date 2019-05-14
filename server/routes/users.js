const express = require("express");
const con = require("./connection");
let router = express.Router();
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  const query = "select * from Clients ";

  con.query(query, [], function(err, result, fields) {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});
router.delete("/:id", (req, res) => {
  const query = "delete from Clients where cin=?";

  con.query(query, [req.params.id], function(err, result, fields) {
    if (err) throw err;
    res.send(req.params.id);
    console.log(result);
  });
});

const insertUser = (
  req,
  res,
  email,
  hash,
  firstname,
  lastname,
  telnum,
  adresse,
  gendre
) => {
  const query =
    "INSERT INTO `Clients`( `email`, `pwd`, `nomClient`, `prenomClient`, `telephone`, `adresse`,  `sexe`) VALUES (?,?,?,?,?,?,?)";
  con.query(
    query,
    [email, hash, firstname, lastname, telnum, adresse, gendre],
    function(err, result, fields) {
      if (err) throw err;
      res.status(200).json(req.body);
      console.log(JSON.stringify(result));
    }
  );
};

router.post("/", (req, res) => {
  const {
    firstname,
    lastname,
    telnum,
    email,
    password,
    gendre,
    adresse
  } = req.body;
  const query = "select * from Clients where email=?";

  con.query(query, [email], function(err, result, fields) {
    if (err) throw err;
    if (!result.length) {
      bcrypt.hash(password, 10, function(err, hash) {
        insertUser(
          req,
          res,
          email,
          hash,
          firstname,
          lastname,
          telnum,
          adresse,
          gendre
        );
      });
    } else console.log("user exist");
  });
});

module.exports = router;
