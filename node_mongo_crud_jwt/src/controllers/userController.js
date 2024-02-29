const { signUpSchema, logInSchema } = require("../validations/userValidation");
const userModel = require("../models/userModel");
const userService = require("../services/userServies");
const { cryptPassword, comparePassword } = require("../utils/passwordCrypt");
const { generateToken } = require("../middleware/generateToken");

const signUpController = async (req, res) => {
  try {
    // Check Validation
    const { error, value } = signUpSchema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    // Check if the email already exists in the database
    const existingUser = await userModel.findOne({ email: value.email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    // Hash the password before saving
    const hashPass = await cryptPassword(value.password);
    value.password = hashPass;

    // Save User
    const result = await userService.signInService(value);

    if (result)
    return res.status(201).json({ message: "SignIn successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const logInController = async (req, res) => {
  try {
    // Check Validation
    const { error, value } = logInSchema.validate(req.body);
    if (error) 
      return res.status(400).json({ message: error.details[0].message });

    // Find User
    const result = await userService.logInService(value.email);

    if (result) {
      // Password Maching
      const verifyPass = await comparePassword(value.password, result.password);
      if (!verifyPass)
        return res.status(401).json({ message: "Password Incorrect" });

      const token = await generateToken(result._id);
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: "Invalid Email" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signUpController,
  logInController,
};
