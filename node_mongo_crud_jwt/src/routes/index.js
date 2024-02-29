const express = require("express");
const studentRoutes = require("./studentRoutes");
const userRoutes = require("./userRoutes")

const router = express.Router();

// user Routes
router.use("/user", userRoutes);

// student Routes
router.use("/student", studentRoutes);

module.exports = router;
