const express = require("express");
const router = express.Router();

const userAddController = require("../controllers/userAddressController");

router.post('/', userAddController.createUserAdd);
router.get('/', userAddController.getAllUserAdd);

module.exports = router;