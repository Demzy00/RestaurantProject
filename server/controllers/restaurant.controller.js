import Restaurant from "../models/restaurant.model.js";
import fs from "fs";

// const addRestaurant = async (req, res) => {
//   try {
//     // const { userId } = req.body;
//     // console.log(`User ID from auth middleware: ${userId}`);

//     // Find the user by ID
//     // const user = await User.findById(userId);
//     // if (!user) {
//     //   return res.status(404).json({ error: "User not found" });
//     // }

//     const { name, address, number } = req.body;
//     console.log(req.body);

//     // Validate input
//     if (!name || !address || !number) {
//       return res.status(400).json({ error: "Please fill in all fields" });
//     }

//     // Set image path
//     // const imagePath = req.file ? req.file.filename : "/avatar.png";

//     // Create a new food
//     const newRestaurant = new Restaurant({
//       name: name,
//       address: address,
//       number: number,
//     });

//     // Save the product to the database
//     await newRestaurant.save();

//     res.json({ success: true, message: "Restaurant Added" });
//   } catch (error) {
//     console.error("Error creating restaurant:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

const addRestaurant = async (req, res) => {
  try {
    const { name, address, number } = req.body;
    console.log(req.body);

    // Validate input
    if (!name || !address || !number) {
      return res.status(400).json({ error: "Please fill in all fields" });
    }

    // Create a new restaurant
    const newRestaurant = new Restaurant({
      name: name,
      address: address,
      number: number,
    });

    // Save the restaurant to the database
    await newRestaurant.save();

    res.json({ success: true, message: "Restaurant Added" });
  } catch (error) {
    console.error("Error creating restaurant:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.find(req.body.userId);
    res.status(200).json(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    return res.status(200).json(updatedRestaurant);
  } catch (error) {
    console.error("Error updating restaurant:", error);
    return res.status(500).json({ error: error.message });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);
    console.log("got here");
    console.log(restaurant);
    fs.unlink(`${restaurant.restaurantLogo}`, () => {});

    console.log("and here");
    const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
    console.log("haha");
    if (!deletedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Invalid product ID", error: error.message });
  }
};

export { addRestaurant, getRestaurant, updateRestaurant, deleteRestaurant };
