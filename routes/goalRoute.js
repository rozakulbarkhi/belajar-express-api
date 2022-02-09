const { getGoals } = require("../controllers/goalController");

const router = require("express").Router();

router.route("/").get(getGoals);

module.exports = router;
