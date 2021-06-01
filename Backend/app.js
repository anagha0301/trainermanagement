const express = require('express');
const Applicationlist = require('./src/model/Applicationlist');

const cors = require('cors');
var bodyparser = require('body-parser');

var app = new express();
app.use(cors());
app.use(bodyparser.json());




app.post('/insert', function (req, res) {
   
  console.log(req.body);

  var applicationlist = {
    name: req.body.applicationlist.name,
    email: req.body.applicationlist.email,
    phone: req.body.applicationlist.phone,
    address: req.body.applicationlist.address,
    qualification: req.body.applicationlist.qualification,
    skillset: req.body.applicationlist.skillset,
    current: req.body.applicationlist.current,
    designation: req.body.applicationlist.designation,
    appliedcourse: req.body.applicationlist.appliedcourse,
    imageUrl: req.body.applicationlist.imageUrl,
  }
  var applicationlist =new Applicationlist(applicationlist);
  applicationlist.save();
});
app.get('/Applicationlist', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  Applicationlist.find()
    .then(function (applicationlists) {
      res.send(applicationlists);

    });

});
// app.get('/Approvedlist', function (req, res) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
//   Applicationlist.find()
//     .then(function (approvedlists) {
//       res.send(approvedlists);

//     });

// });
app.get('/:id',  (req, res) => {
  
    const id = req.params.id;
    console.log(id);
      Applicationlist.findOne({_id:id})
      .then((applicationlist)=>{
          res.send(applicationlist);
          // console.log(applicationlist)
      });
      console.log("id called")
      
  })
  
 







app.listen(3000, function () {
  console.log('listening to port 3000');
});
