const asyncHandler = require("express-async-handler");

exports.getGoals = asyncHandler(async (req, res) => {
  res.send("get all goals");
});

exports.setGoal = asyncHandler(async (req, res) => {
  const { text } = req.body;

  if (!req.body.text) {
    res.status(400).json({ message: "Please input the text" });
  }

  res.json({
    message: "Set goal was successfully",
    text,
  });
});

exports.updateGoal = asyncHandler(async (req, res) => {
  res.send(`update goal ${req.params.id}`);
});

exports.deleteGoal = asyncHandler(async (req, res) => {
  res.send(`delete goal ${req.params.id}`);
});
