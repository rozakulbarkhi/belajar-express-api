// model
const Goal = require("../models/goalModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

exports.getGoals = asyncHandler(async (req, res) => {
  const data = await Goal.find({ user: req.user.id });

  res.status(200).json({
    message: "Get all goals was successfully",
    data: data,
  });
});

exports.setGoal = asyncHandler(async (req, res) => {
  const { text } = req.body;

  if (!req.body.text) {
    res.status(400).json({ message: "Please input the text" });
  }

  const data = await Goal.create({ text, user: req.user.id });

  res.status(201).json({
    message: "Set goal was successfully",
    data,
  });
});

exports.updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400).json({ message: "Goal not found" });
  }

  const data = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401).json({ message: "User not found!" });
  }

  if (goal.user.toString() !== user.id) {
    res.status(401).json({ message: "User not authorization" });
  }

  res.status(200).json({
    message: "Update data was successfully",
    data: data,
  });
});

exports.deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400).json({ message: "Goal not found" });
  }

  const data = await Goal.findByIdAndDelete(req.params.id);
  console.log(data);

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401).json({ message: "User not found!" });
  }

  if (goal.user.toString() !== user.id) {
    res.status(401).json({ message: "User not authorization" });
  }

  res.status(200).json({
    message: `Data ${data._id} was deleted`,
  });
});
