const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  photoURL: {type:String},
  isSignedIn: {type:Boolean},
  Lat: {type:Schema.Types.Decimal128},
  Lng: {type:Schema.Types.Decimal128},
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;