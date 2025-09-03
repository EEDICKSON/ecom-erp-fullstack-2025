import User from "../models/user.models.js";
import asyncHandler from "express-async-handler";
import generateToken from "../util/generateToken.js";

// REGISTER USER
// ROUTE POST / API / V1 / AUTH /REGISTER
// @access public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User already exits");
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// LOGIN USER
// ROUTE POST / API / V1 / AUTH /LOGIN
//@access public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid login credentials");
  }
});

// LOGOUT USER
// route POST /api/v1/auth/logout
// @access pubic

const logOut = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logout successfully" });
});

export { logOut, loginUser, registerUser };
