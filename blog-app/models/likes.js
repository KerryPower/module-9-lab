const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const likeSchema = new Schema({
   LikeID: { type: Number, required: true, unique: true },
   PostID: { type: Number, required: true },
   UserId: { type: Number, required: true },
   createdAt: { type: Date, default: Date.now }
 });

likeSchema.plugin(autoIncrement, { inc_field: 'LikeID' });

module.exports = mongoose.model("Like", likeSchema);