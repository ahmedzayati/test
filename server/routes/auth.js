const express = require("express");
const jwt = require("jsonwebtoken");
let router = express.Router();
const bcrypt = require("bcrypt");
const con = require("./connection");

router.post("/", (req, resp) => {
  const { email, password } = req.body;
  const query = "select * from Clients where email=?";
  con.query(query, [email], (err, result, fields) => {
    if (result.length) {
      console.log(result[0].pwd);
      bcrypt.compare(password, result[0].pwd, (err, res) => {
        if (res) {
          const token = jwt.sign(
            {
              cin: result[0].cin,
              prenomClient:result[0].prenomClient,
              email: result[0].email,
              nomClient: result[0].nomClient,
              adresse:result[0].adresse,
              telephone:result[0].telephone
            },
            "secret"
          );
          resp.send({ token });
          console.log(token);
        } else resp.status(401).json({ error: "problem authetification" });
      });
    } else resp.status(401).json({ error: "problem authetification" });
  });
});
module.exports = router;
