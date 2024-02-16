const express = require("express");
const studentRoutes = require("./studentRoute");
const usersAddressRoutes = require("./usersAddressRoute");
const kideGameRoutes = require("./kideGameRoutes");
const clgStdBranchRoutes = require("./clgStdBranchRoutes");

const app = express();
const router = express.Router();

// default route
app.get("/", (req, res) => {
    res.json("Api working fine!");
});

// Student Routes
router.use("/student", studentRoutes);

// Users Address Routes
router.use("/user-address", usersAddressRoutes);

// Kides game Routes
router.use("/kide-game", kideGameRoutes);

// ClgStudent Branch Routes
router.use("/clgStd-branch", clgStdBranchRoutes);

module.exports = router;