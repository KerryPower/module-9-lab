const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  PostID: { type: Number, unique: true, required: true },
  Title: { type: String, trim: true, required: true },
  Description: { type: String, trim: true, required: true },
  Image: { type: String, trim: true, required: true },
  UserID: { type: Number, required: true },
  CreatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", postSchema);