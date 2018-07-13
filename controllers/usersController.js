const db = require("../models/user.js");

module.exports = {
    findAll: function(req, res) {
      db
        .find({ "isSignedIn" : true })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db
        .findOne({email:req.body.email})
        .then(currentUser => {
          if(currentUser){
            console.log(currentUser);
            db.findOneAndUpdate({
              "email" : req.body.email
            }, { $set : { "isSignedIn" : true } })
            .then(data => res.send("Welcome Back"))
          }else {
            db.create(req.body)
            .then(dbModel => res.json(dbModel))
          }})
    },
    updateSignIn: function(req, res){
      db
        .findOneAndUpdate({"email":req.body.email}, { $set: {"isSignedIn":false}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    updateLocation: function(req, res){
      db
        .findOneAndUpdate({"email":req.body.email}, { $set: {"Lat":req.body.Lat,"Lng":req.body.Lng }})
        .then(dbModel => res.send("location updated"))
        .catch(err => res.status(422).json(err));
    },
    groupLocation: function(req,res){
      console.log(req.query)
      db
        .find({'email':{$in:req.query.group}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }

  };

  