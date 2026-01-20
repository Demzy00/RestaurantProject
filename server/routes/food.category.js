const express = require("express");

const {
  addFoodCategory,
  listCategory,
  updateFoodCategory,
  deleteFoodCategory,
} = require("../controllers/food.category");

const multer = require("multer");

const foodCategoryRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "upload",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// routes
foodCategoryRouter.post("/add", upload.single("image"), addFoodCategory);
foodCategoryRouter.get("/list", listCategory);
foodCategoryRouter.patch("/:id", updateFoodCategory);
foodCategoryRouter.delete("/:id", deleteFoodCategory);

module.exports = foodCategoryRouter;
