const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  UserID: { type: Number, unique: true, required: true },
  Username: { type: String, trim: true, required: true, unique: true },
  Email: { type: String, trim: true, required: true, unique: true },
  Password: { type: String, required: true },
  CreatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
