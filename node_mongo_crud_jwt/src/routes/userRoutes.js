const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Define routes
router.post('/signUp', userController.signUpController);
router.post('/logIn', userController.logInController);

module.exports = router;