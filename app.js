const express=require('express');
const app=express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json());


var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "PFA"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Clients", function (err, result, fields) {
          if (err) throw err;
          
          console.log(JSON.stringify(result));
        });
      });

// app.post('/test',(req,res)=>{
//       con.query("SELECT * FROM Clients", function (err, result, fields) {
//   if (err) throw err;
          
//   console.log(JSON.stringify(result));

//         res.send(result);
//       });
// })
app.post('/users',(req,res)=>{
  con.connect(function(err) {
    if (err) throw err;
    const query="INSERT INTO `Clients`(`cin`, `email`) VALUES ("+req.userData.firstname+","+req.userData.lastname+")";
    con.query(query, function (err, result, fields) {
      if (err) throw err;
      
      console.log(JSON.stringify(result));

    });



  });
  console.log("5rena fih")
})



var port= process.env.PORT || 3000;
app.listen(3000,()=>console.log(`listening on ${port}`));
