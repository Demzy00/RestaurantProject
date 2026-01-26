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
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.get("/:id", getFoodById);
foodRouter.patch("/:id", updateFood);
foodRouter.delete("/:id", deleteFood);

module.exports = foodRouter;
