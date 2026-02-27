const Category = require("../models/food.category.model");
const fs = require("fs");

const addCategory = async (req, res) => {
  try {
    const { id } = req.userId;

    const { name } = req.body;

    // Validate input
    if (!name) {
      return res.status(400).json({ error: "Please fill in name field" });
    }

    // Check to see if you have created the food before
    if (name == Category.name) {
      return res.status(401).json({ message: "Category already exist" });
    }

    // Set image path

    // Create a new food
    const newCategory = new Category({
      name,
      userId: id,
    });

    // Save the product to the database
    await newCategory.save();

    res.json({ success: true, message: "Category Added" });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const listCategory = async (req, res) => {
  try {
    const { id } = req.userId;
    const category = await Category.find({ userId: id });
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    console.error("Error getting all category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.userId;
    console.log("and here");
    const deletedCategory = await Category.findByIdAndDelete({ userId: id });
    console.log("haha");
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Invalid category", error: error.message });
  }
};

module.exports = {
  addCategory,
  listCategory,
  deleteCategory,
};
