const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
   LikeID: { type: Number, unique: true, required: true },
   PostID: { type: Number, required: true },
   UserID: { type: Number, required: true },
   CreatedAt: { type: Date, default: Date.now }
 });


module.exports = mongoose.model("Like", likeSchema);