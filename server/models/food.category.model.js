const mongoose = require("mongoose");
const { Schema } = mongoose;

const foodCategorySchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "Restaurant", required: true },
  name: { type: String, required: true },
  foods: [{ type: Schema.Types.ObjectId, ref: "Food" }]
});

const foodCategory = mongoose.model("foodCategory", foodCategorySchema);

module.exports = foodCategory;
