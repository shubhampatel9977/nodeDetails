const userModel = require("../models/userModel");

const signInService = async (payload) => {
  try {
    const add = new userModel(payload);
    const sighIn = await add.save();
    return sighIn;
  } catch (error) {
    console.error("Someting wrong in signInService", error.message);
  }
};

const logInService = async (data) => {
  try {
      const userData = await userModel.findOne({ email: data });
      return userData;
  } catch (error) {
    console.error("Someting wrong in logInService", error.message);
  }
};

module.exports = {
  signInService,
  logInService,
};
