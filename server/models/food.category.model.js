const mongoose = require("mongoose");
const { Schema } = mongoose;

const foodCategorySchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
});

const foodCategory = mongoose.model("foodCategory", foodCategorySchema);

module.exports = foodCategory;
