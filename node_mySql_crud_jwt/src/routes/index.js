const express = require("express");
const studentRoutes = require("./studentRoutes");
const userRoutes = require("./userRoutes")
const redisRoutes = require("./redisRoutes");

const app = express();
const router = express.Router();

// default route
app.get("/", (req, res) => {
  res.json("Api working fine!");
});

// user Routes
router.use("/user", userRoutes);

// student Routes
router.use("/student", studentRoutes);

// redis Routrs
router.use("/redis", redisRoutes);

module.exports = router;
