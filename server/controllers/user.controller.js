import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import validator from "validator";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // if user exist
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // const token = await createToken(user._id);
    // console.log(token);
    console.log("first");
    console.log(user._id);
    console.log(user.email);

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    console.log(token);
    // res.cookie(token, process.env.JWT_SECRET, { httpOnly: true });
    // res.cookie("token", token, { httpOnly: true });
    // console.log(res.
    console.log("end of controller");
    // console.log({ success: true, message: "Login successfully" });
    return res.json({ success: true, token, message: "Login successful" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

const createToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  // checking if user already exist
  try {
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return res.json({ success: false, message: "User already exist" });
    }

    // validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // check if password is less than 8 characters
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    console.log("in here");
    const user = await newUser.save();
    console.log(user);
    console.log(user._id);
    const token = await createToken(user._id);
    console.log({ success: true }, token);
    res.json({ success: true, token, message: "Registered successful" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const getAll = async (req, res) => {
  const all = await userModel.find();
  return res.json({ all });
};

export { loginUser, registerUser, getAll };
