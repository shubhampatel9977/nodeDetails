const express = require("express");
const router = express.Router();

const clgStdBranchController = require("../controllers/clgStdBranchController");

router.post('/', clgStdBranchController.createClgStdBranch);
router.get('/', clgStdBranchController.getAllClgStdBranch);

module.exports = router;