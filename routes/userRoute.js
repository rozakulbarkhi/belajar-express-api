const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

const router = require("express").Router();

// route
router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/get-user", getUser);

module.exports = router;
