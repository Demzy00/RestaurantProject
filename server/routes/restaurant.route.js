const express = require("express");

const multer = require("multer");
const { default: authMiddleware } = require("../middleware/auth");
const {
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurant,
} = require("../controllers/restaurant.controller");

const restaurantRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// routes
restaurantRouter.post("/:id", authMiddleware, addRestaurant);
restaurantRouter.get("/:id", authMiddleware, getRestaurant);
restaurantRouter.patch("/:id", authMiddleware, updateRestaurant);
restaurantRouter.delete("/:id", authMiddleware, deleteRestaurant);

module.exports = restaurantRouter;
