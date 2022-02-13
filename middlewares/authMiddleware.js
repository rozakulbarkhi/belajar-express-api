const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from bearer
      token = req.headers.authorization.split(" ")[1];

      // verify token
      const decoded = jwt.decode(token, process.env.JWT_SECRET);

      // get user from token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorization" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "No token!" });
  }
});

module.exports = { protect };
