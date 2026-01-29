import mongoose from "mongoose";



const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Restaurant name is required"],
    },
    address: {
      type: String,
      required: [true, "Restaurant address is required"],
    },
    number: {
      type: String,
      required: [true, "Restaurant contact number is required"],
    },
    // image: {
    //   type: String,
    // },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    food: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
    },
  },
  { timestamps: true },
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
