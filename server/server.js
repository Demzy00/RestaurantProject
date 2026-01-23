import express from "express";
import cors from "cors";

import dotenv from "dotenv";
const app = express();
import foodRouter from "./routes/food.route.js";
import foodCategoryRouter from "./routes/food.category.js";
import userRouter from "./routes/user.route.js";

dotenv.config();

app.use(express.json());
const port = process.env.PORT;

import { connectDB } from "./config.js";

connectDB();

// Configure CORS to allow requests from your frontend's origin
app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "http://localhost:5173",
      "http://localhost:5175",
    ], // Your frontend origin
    credentials: true, // Allow cookies to be sent
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  }),
);

app.use("/images", express.static("uploads"));
app.use("/images", express.static("upload"));

app.use("/api/food", foodRouter);
app.use("/api/foodCategory", foodCategoryRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
