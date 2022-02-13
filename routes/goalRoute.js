const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.use(protect).route("/").get(getGoals).post(setGoal);
router.use(protect).route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
