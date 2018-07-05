const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");

const Group = new Schema({
   creator:{type:String, required: true},
   invited:{type:Schema.Types.Array},
   urlId:{type:String, default: shortid.generate()},
   centerLoc: {
       Lat:{type:Schema.Types.Decimal128},
       Lng:{type:Schema.Types.Decimal128},
    },
    
});

const Group= mongoose.model("Group", groupSchema);

module.exports = Group;