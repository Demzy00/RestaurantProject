const Food = require("../models/food.model.js");
const fs = require("fs");

const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    // Validate input
    if (!name || !description || !price || !category) {
      return res.status(400).json({ error: "Please fill in all fields" });
    }

    // Check to see if you have created the food before
    if (name == Food.name) {
      return res.status(401).json({ message: "Product already exist" });
    }

    // Set image path
    const imagePath = req.file ? req.file.filename : "/avatar.png";

    // Create a new food
    const newFood = new Food({
      name,
      description,
      price,
      category,
      image: imagePath,
    });

    // Save the product to the database
    await newFood.save();

    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.error("Error getting all foods:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getFoodById = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);
    return res.status(200).json({ success: true, data: food });
  } catch (error) {
    console.error("Error getting food:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFood = await Food.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }
    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ error: err.message });
  }
};

const deleteFood = async (req, res) => {
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
      return res.status(404).json({ message: "Food not found" });
    }
    res.status(200).json({ message: "Food deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Invalid product ID", error: error.message });
  }
};

module.exports = {
  addFood,
  listFood,
  getFoodById,
  updateFood,
  deleteFood,
};
