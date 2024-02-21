const express = require("express");
const router = express.Router();
const { register, login, updateUser } = require("../controllers/auth");
const authenticateUser = require("../middleware/authentication");
const restrictDemoUser = require("../middleware/restrict-demo-user");

const rateLimiter = require("express-rate-limit");
const apiRateLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes)
  message: {
    msg: "Too many requests from this IP address. Please try again after 15 minutes.",
  },
});

router.route("/register").post(apiRateLimiter, register);
router.route("/login").post(apiRateLimiter, login);
router
  .route("/updateUser")
  .patch(authenticateUser, restrictDemoUser, updateUser);

module.exports = router;
