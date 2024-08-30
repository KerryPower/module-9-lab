const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  CommentID: { type: Number, unique: true },
  Comment: { type: String, trim: true, required: true },
  PostID: { type: Number, required: true },
  UserID: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

commentSchema.plugin(autoIncrement, { inc_field: 'CommentID' });

module.exports = mongoose.model("Comment", commentSchema);