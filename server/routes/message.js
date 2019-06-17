const express = require("express");
const con = require("./connection");
let router = express.Router();
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  const { contenu, cinClient } = req.body;
  const query = "INSERT INTO `Message`( `corps`, `cinClient`) VALUES (?,?)";

  con.query(query, [contenu, cinClient], function(err, result1, fields) {
    if (err) throw err;
    console.log("succ");
    res.send({
      contenu: contenu,
      cinClient: cinClient
    });
  });
});
router.get("/", (req, res) => {
  const query = "select * from Message,Clients where Message.cinClient=Clients.cin ";

  con.query(query, [], function(err, result, fields) {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

router.put("/", (req, res) => {
  const query = "UPDATE `Message` SET `reponse`=?  WHERE numMessage=?";
  const { reponse, numMessage } = req.body;
  con.query(query, [reponse, numMessage], function(err, result, fields) {
    if (err) throw err;
    res.send(req.body);
    console.log(result);
  });
});

module.exports = router;
