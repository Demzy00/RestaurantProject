const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Restaurant name is required"],
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    restaurantLogo: {
      type: String,
      required: [true, "Image is required"],
    },
    food: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "food" }],
      default: [],
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },

  { timestamps: true },
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
