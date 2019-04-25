const users = require("./routes/users");
const auth = require("./routes/auth");

const admin = require("./routes/admin");
const personnels = require("./routes/personnels");

const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api/personnels", personnels);

// const insertUser=(req,res,email,hash,firstname,lastname,telnum,adresse,gendre)=>{
//         const query="INSERT INTO `Clients`( `email`, `pwd`, `nomClient`, `prenomClient`, `telephone`, `adresse`,  `sexe`) VALUES (?,?,?,?,?,?,?)";
//         con.query(query,[email,hash,firstname,lastname,telnum,adresse,gendre], function (err, result, fields) {
//        if (err) throw err;
//           res.sendStatus(200);
//           console.log(JSON.stringify(result));

//       });
//       };
// const checkUser=(email)=>{
// const query="select * from Clients where email=?";
// con.query(query,[email], function (err, result, fields) {
//   if (err) throw err;
//   if(!result.length)
//   bcrypt.hash(password, 10, function(err, hash) {
//     insertUser(req,res,email,hash,firstname,lastname,telnum,adresse,gendre);
//     })

//  })

// }

var port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`listening on ${port}`));
