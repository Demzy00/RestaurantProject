const mongoose = require("mongoose");
const { Schema } = mongoose;

const foodSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
module.exports = foodModel;
