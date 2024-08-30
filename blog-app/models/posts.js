const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const postSchema = new Schema({
  PostID: { type: Number, required: true, unique: true },
  Title: { type: String, trim: true, required: true },
  Description: { type: String, trim: true, required: true },
  Image: { type: String, trim: true, required: true },
  UserID: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

postSchema.plugin(autoIncrement, { inc_field: 'PostID' });

module.exports = mongoose.model("Post", postSchema);