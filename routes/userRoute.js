const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

const router = require("express").Router();

// route
router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/get-user", protect, getUser);

module.exports = router;
