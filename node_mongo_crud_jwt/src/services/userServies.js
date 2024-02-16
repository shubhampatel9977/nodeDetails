const userModel = require("../models/userModel");

const signIn = async (payload) => {
  try {
    const add = new userModel(payload);
    const sighIn = await add.save();
    return sighIn;
  } catch (error) {
    console.error("Someting wrong in signIn", error.message);
  }
};

const logIn = async (data) => {
  try {
      const userData = await userModel.findOne(data);
      return userData;
  } catch (error) {
    console.error("Someting wrong in logIn", error.message);
  }
};

module.exports = {
  signIn,
  logIn,
};
