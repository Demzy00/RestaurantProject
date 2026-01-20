const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
const app = express();
const foodRouter = require("./routes/food.route.js");
const foodCategoryRouter = require("./routes/food.category.js");

dotenv.config();

app.use(express.json());
const port = process.env.PORT;

const { connectDB } = require("./config");

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
  })
);

app.use("/images", express.static("uploads"));
app.use("/images", express.static("upload"));

app.use("/api/food", foodRouter);
app.use("/api/foodCategory", foodCategoryRouter);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
