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


router.post('/',(req,res,)=>{
  
    var sampleFile = req.files.file;
  
      // Use the mv() method to place the file somewhere on your server
      sampleFile.mv('/home/admed/Desktop/pfa2/pfa/public/assets/images/'+sampleFile.name, function(err) {

        const {description,nomProduit,prixProduit,
          marque,immatriculation,couleur,data}=req.body;
          console.log(req.body)
          const query="INSERT INTO `Vehicule`( `numvehicule`,`nomvehicule`,`immatriculation`, `numMarque`, `couleur`, `prix`,`description`,`path`) VALUES (?,?,?,?,?,?,?,?)"
          con.query(query,[1,nomProduit,immatriculation,1,couleur,prixProduit,description,req.files.file.name],function(err, result, fields) {
            if (err) throw err;
            res.status(200).json(req.body)
       console.log("1")
   
   })
   
    
   
   })
  })

   router.post('/upload',(req,res,)=>{
  
   console.log(req.body)
      var sampleFile = req.files.file;
  
      // Use the mv() method to place the file somewhere on your server
      sampleFile.mv('./img/'+sampleFile.name, req,function(err) {
        const {nomProduit,prixProduit}=req.body;

          const query="INSERT INTO `Vehicule`( `nomvehicule`,`prix`) VALUES (?,?)"
          con.query(query,[nomProduit,prixProduit],function(err, result, fields) {
            if (err) throw err;
            
               res.status(200).json(req.body)
           
           })
    
        
      });
         
         
     
     })
    
      
    

module.exports = router;
