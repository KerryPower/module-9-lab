const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  CommentID: { type: Number, unique: true, required: true },
  Comment: { type: String, trim: true, required: true },
  PostID: { type: Number, required: true },
  UserID: { type: Number, required: true },
  CreatedAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Comment", commentSchema);