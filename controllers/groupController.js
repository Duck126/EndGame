const db = require("../models/Group.js");

module.exports = {
    create: function(req, res) {
        db.create(req.body)
        .then(dbModel => 
            res.json(dbModel)
        )
    }
}