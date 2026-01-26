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
  },
  { timestamps: true },
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
