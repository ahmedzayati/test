const express = require("express");
const con = require("./connection");
let router = express.Router();
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
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





const insertPersonnel=(req,res,email,hash,firstname,lastname,telnum,adresse,dateEmbauche,grade,pseudo,salaire,position,cin)=>{
  const query="INSERT INTO `Personnels`( `cin`,`email`, `password`, `nomPersonnel`, `prenomPersonnel`, `telephone`, `adresse`, `dateEmbauche`, `grade`, `pseudo`, `salaire`, `position`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
  con.query(query,[email,hash,firstname,lastname,telnum,adresse,dateEmbauche,grade,pseudo,salaire,position,cin], function (err, result, fields) {
 if (err) throw err;
    req.body['grade']=1;
    res.status(200).json(req.body)
    console.log(JSON.stringify(result));

});
};

router.post('/',(req,res,)=>{
  const {email,nomPersonnel,prenomPersonnel,
  position,salaire,telephone,adresse,pseudo,dateEmbauche,password,cin}=req.body;
  const query="select * from Personnels where email=?";

  con.query(query,[email], function (err, result, fields) {
    if (err) throw err;
    if(!result.length)
    bcrypt.hash(password, 10, function(err, hash) {
      insertPersonnel(req,res,email,hash,nomPersonnel,prenomPersonnel,telephone,adresse,dateEmbauche,1,pseudo,salaire,position,cin);
      })
    else console.log("user exist")
  
   })
  });




  router.put("/", (req, res) => {
    const query = "UPDATE `Personnels` SET `nomPersonnel`=?,`prenomPersonnel`=?,`telephone`=?,`adresse`=?,`pseudo`=?,`salaire`=?,`position`=? WHERE cin=?";
    const {nomPersonnel,prenomPersonnel,
      position,salaire,telephone,adresse,pseudo,dateEmbauche,cin}=req.body;
    con.query(query, [nomPersonnel,prenomPersonnel,telephone,adresse,pseudo,salaire,position,cin], function(err, result, fields) {
      if (err) throw err;
      res.send(req.body)
      console.log(result);
    });
  });
  



module.exports = router;
