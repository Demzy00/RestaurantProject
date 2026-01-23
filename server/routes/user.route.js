import express from "express";
import {
  getAll,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/get", getAll);

export default userRouter;
