const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });
};

exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "Input all field" });
  }

  // user exists
  const user = await User.findOne({ email });

  if (user) {
    res.status(200).json({ message: "User exists" });
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // store user
  const data = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (data) {
    res.status(201).json({
      message: "Created user succefully",
      data: {
        _id: data.id,
        name: data.name,
        email: data.email,
        token: generateToken(data._id),
      },
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
});

exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      message: "Login successfully",
      data: {
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(400).json({ message: "Error credentials" });
  }
});

exports.getUser = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});
