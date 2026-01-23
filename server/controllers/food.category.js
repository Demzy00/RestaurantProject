const Food = require("../models/food.category.js");

const addFoodCategory = async (res, req) => {
  try {
    const { name } = req.body;

    // Validate input
    if (!name) {
      return res.status(400).json({ error: "Please fill in the name field" });
    }

    // Check to see if you have created the food before
    if (name == Food.name) {
      return res
        .status(401)
        .json({ message: "Product Category already exist" });
    }

    // Set image path
    const imagePath = req.file ? req.file.filename : "/avatar.png";

    // Create a new food
    const newFoodCategory = new Food({
      name,
      image: imagePath,
    });

    // Save the product to the database
    await newFoodCategory.save();

    res.json({ success: true, message: "Food Category Added" });
  } catch (error) {}
};

const listCategory = async (req, res) => {
  try {
    const foodCategory = await Food.find();
    return res.status(200).json({ success: true, data: foodCategory });
  } catch (error) {
    console.error("Error getting all food category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateFoodCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFoodCategor = await Food.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateFoodCategor) {
      return res.status(404).json({ message: "Food Category not found" });
    }
    return res.status(200).json(updateFoodCategory);
  } catch (error) {
    console.error("Error updating product category:", error);
    return res.status(500).json({ error: err.message });
  }
};

const deleteFoodCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);
    console.log("got here");
    console.log(food);
    fs.unlink(`${food.image}`, () => {});

    console.log("and here");
    const deletedFood = await Food.findByIdAndDelete(id);
    console.log("haha");
    if (!deletedFood) {
      return res.status(404).json({ message: "Food Category not found" });
    }
    res.status(200).json({ message: "Food Category deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Invalid product ID", error: error.message });
  }
};

module.exports = {
  addFoodCategory,
  listCategory,
  updateFoodCategory,
  deleteFoodCategory,
};
