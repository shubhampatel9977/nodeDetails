const { signInSchema, logInSchema } = require("../validations/userValidation");
const userService = require("../services/userServies");
const generateToken = require("../middleware/generateToken");

// Controller methods
const signIn = async (req, res) => {
  try {
    const { error, value } = signInSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const result = await userService.signIn(value);
    if (result) {
      res.status(201).json({ message: "SignIn successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logIn = async (req, res) => {
  try {
    const { error, value } = logInSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const result = await userService.logIn(value);
    if (result) {
      const token = generateToken(result.email);
      res.status(200).json({ token });
    } else {
      res.status(200).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signIn,
  logIn,
};
