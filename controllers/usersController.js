const db = require("../models/user.js");

module.exports = {
    findAll: function(req, res) {
      db
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db
        .findOne({email:req.body.email})
        .then(currentUser => {
          if(currentUser){
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
    updateCurrentUser: function(req, res){
      db
        .findOneAndUpdate({"email":req.body.email}, { $set: {"isSignedIn":true}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };

  