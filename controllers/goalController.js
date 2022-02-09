// model
const Goal = require("../models/goalModel");
const asyncHandler = require("express-async-handler");

exports.getGoals = asyncHandler(async (req, res) => {
  const data = await Goal.find({});

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

  const data = await Goal.create({ text });

  res.status(201).json({
    message: "Set goal was successfully",
    data,
  });
});

exports.updateGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { text } = req.body;

  if (!req.body.text) {
    res.status(400).json({ message: "Please input the text" });
  }

  const data = await Goal.findByIdAndUpdate(id, { text }, { new: true });

  res.status(200).json({
    message: "Update data was successfully",
    data: data,
  });
});

exports.deleteGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const data = await Goal.findByIdAndDelete(id);
  console.log(data);

  res.status(200).json({
    message: `Data ${data._id} was deleted`,
  });
});
