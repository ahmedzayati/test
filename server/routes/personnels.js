const express = require("express");
const con = require("./connection");
let router = express.Router();
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  const query = "select * from Personnels ";

  con.query(query, [], function(err, result, fields) {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});
router.delete("/:id", (req, res) => {
  const query = "delete from Personnels where cin=?";

  con.query(query, [req.params.id], function(err, result, fields) {
    if (err) throw err;
    res.send(req.params.id)
    console.log(result);
  });
});
module.exports = router;
