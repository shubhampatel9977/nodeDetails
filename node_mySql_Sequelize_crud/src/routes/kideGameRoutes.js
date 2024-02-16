const express = require("express");
const router = express.Router();

const kideGameController = require("../controllers/kideGameController");

router.post('/', kideGameController.createKideGame);
router.get('/', kideGameController.getAllKideGame);

module.exports = router;