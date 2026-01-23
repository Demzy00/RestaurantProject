const mongoose = require("mongoose");

const foodCategorySchema = new mongoose.Schema({
  userId: {},
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const foodCategoryModel = mongoose.model("foodCategory", foodCategorySchema);
module.exports = foodCategoryModel;
