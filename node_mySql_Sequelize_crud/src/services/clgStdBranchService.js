const sequelize = require("../config/sequelize");
const { ClgStudentModel, BranchModel } = require("../models/clgStd_branch");

const createClgStdBranch = async (payload) => {
  try {
    await ClgStudentModel.create(payload);
    await BranchModel.create({ clg_std_id: newUser.stud_id, ...payload });
    await newUser.addBranch(newBranch);
    return true;
  } catch (error) {
    console.error("Someting wrong in createClgStdBranch", error.message);
    return false;
  }
};

const getAllClgStdBranch = async () => {
  try {
    const studentsWithBranches = await ClgStudentModel.findAll({
      include: [{ model: BranchModel }],
    });
    return studentsWithBranches;
  } catch (error) {
    console.error("Someting wrong in getAllClgStdBranch", error.message);
  }
};

module.exports = {
  createClgStdBranch,
  getAllClgStdBranch,
};
