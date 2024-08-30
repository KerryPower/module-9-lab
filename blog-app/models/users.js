const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const userSchema = new Schema({
  UserID: { type: Number, unique: true },
  Username: { type: String, trim: true, required: true, unique: true },
  Email: { type: String, trim: true, required: true, unique: true },
  Password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

userSchema.plugin(autoIncrement, { inc_field: 'UserID' });

module.exports = mongoose.model("User", userSchema);
