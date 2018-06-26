const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userID: { type: String, required: true },
  googleID: { type: String, required: true },
  profileIMG: String,
  isSignedIn: {type:Boolean, default:false },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;