const express = require("express");

const { default: authMiddleware } = require("../middleware/auth");
const {
  addCategory,
  listCategory,
  deleteCategory,
} = require("../controllers/food.category.controller");

const foodCategoryRouter = express.Router();

// routes
foodCategoryRouter.post("/:id", authMiddleware, addCategory);
foodCategoryRouter.get("/:id", authMiddleware, listCategory);
foodCategoryRouter.delete("/:id", authMiddleware, deleteCategory);

module.exports = foodCategoryRouter;
