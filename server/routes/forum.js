const express = require("express");
const con = require("./connection");
let router = express.Router();


router.get("/", (req, res) => {
    const query = "SELECT * FROM  `reponses`,`Clients`where Clients.cin=reponses.cinClient";
    var c=[]
    con.query(query, [], function(err, result1, fields) {
      if (err) throw err;
     var x=result1
    

    const query2 = "SELECT * FROM  `publication`,`Clients` where Clients.cin=publication.cinClient ";
    
    con.query(query2, [], function(err, result, fields) {
      if (err) throw err;
      var j=result;
      console.log(j+"jj")
     for (var i =0; i<j.length;i++){
        console.log(j[i].codePublication)
            c.push({publication:j[i].contenu,date:j[i].date,nomClient:j[i].nomClient,codePublication:j[i].codePublication,reponses:x.filter(r=>r.codePublication===j[i].codePublication)})
     }console.log(c)
     res.send(c)

    });
});
  });
 

  router.post("/", (req, res) => {

    const { contenu, codePublication ,cinClient} = req.body;
    const query = "INSERT INTO `reponses`( `codePublication`, `contenu`, `cinClient`, `dateRep`) VALUES (?,?,?,?)";
    
    con.query(query, [codePublication,contenu,cinClient,Date.now()], function(err, result1, fields) {
      if (err) throw err;
      console.log("succ")
      res.send({
        contenu:contenu, codePublication:codePublication ,cinClient:cinClient
      })
      

    
    
});

  });

  router.post("/question", (req, res) => {

    const { contenu ,cinClient} = req.body;
    const query = "INSERT INTO `publication`(`contenu`, `cinClient`, `date`) VALUES (?,?,?)";
    
    con.query(query, [contenu,cinClient,Date.now()], function(err, result1, fields) {
      if (err) throw err;
      console.log("succ")
      res.send({
        contenu:contenu ,cinClient:cinClient,codePublication:result1.insertId
      })
      

    
    
});

  });



module.exports = router;
