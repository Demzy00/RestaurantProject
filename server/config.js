const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectDB };
