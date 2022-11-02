const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPhoto: {
    type: String,
    default: "",
  },
  followers: {
    type: String,
    default: [],
  },
  following: {
    type: String,
    default: [],
  },
  coverPhoto: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now
  }
},
  {
    versionKey: false,
    timestamps: true,
  });
module.exports = User = mongoose.model("users", UserSchema);