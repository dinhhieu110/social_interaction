import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists!" });
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashPassword,
    });
    if (newUser) {
      // Generate JWT token here, _id auto gen by Mongo
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        avatar: newUser.avatar,
      });
    } else {
      return res.status(400).json({ message: "Invalid User" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "This account does not exist!" });
    } else {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      console.log("isPasswordCorrect: ", isPasswordCorrect);
      if (isPasswordCorrect) {
        generateToken(user._id, res);
        return res.status(200).json({
          _id: user._id,
          fullname: user.fullName,
          email: user.email,
          avatar: user.avatar,
        });
      } else {
        return res.status(400).json({ message: "Invalid credential!" });
      }
    }
  } catch (error) {
    console.log("Error in Login controller: ", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logout successfully!" });
  } catch (error) {
    console.log("Error in Logout controller: ", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProfile = async (req, res) => {};
