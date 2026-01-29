const express = require("express");

const {
  addFood,
  listFood,
  getFoodById,
  updateFood,
  deleteFood,
} = require("../controllers/food.controller");

const multer = require("multer");
const { default: authMiddleware } = require("../middleware/auth");

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// routes
foodRouter.post("/:id", upload.single("image"),authMiddleware, addFood);
foodRouter.get("/:id",authMiddleware, listFood);
foodRouter.get("/:id",authMiddleware, getFoodById);
foodRouter.patch("/:id",authMiddleware, updateFood);
foodRouter.delete("/:id",authMiddleware, deleteFood);

module.exports = foodRouter;
