exports.getGoals = (req, res) => {
  res.send("get all goals");
};

exports.setGoal = (req, res) => {
  res.send("set goal");
};

exports.updateGoal = (req, res) => {
  res.send(`update goal ${req.params.id}`);
};

exports.deleteGoal = (req, res) => {
  res.send(`delete goal ${req.params.id}`);
};
