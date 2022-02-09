exports.getGoals = (req, res) => {
  res.send("get all goals");
};

exports.setGoal = (req, res) => {
  const { text } = req.body;

  if (!req.body.text) {
    res.status(400).json({ message: "Please input the text" });
  }

  res.json({
    message: "Set goal was successfully",
    text,
  });
};

exports.updateGoal = (req, res) => {
  res.send(`update goal ${req.params.id}`);
};

exports.deleteGoal = (req, res) => {
  res.send(`delete goal ${req.params.id}`);
};
