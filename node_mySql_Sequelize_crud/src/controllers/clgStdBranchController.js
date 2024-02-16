const clgStdBranchService = require("../services/clgStdBranchService");

const createClgStdBranch = async (req, res) => {
  try {
    const { name, age, branch_name } = req.body;

    if (name && age && branch_name) {
      const result = await clgStdBranchService.createClgStdBranch({
        name,
        age,
        branch_name,
      });
      if (result) {
        res.status(201).json({ message: "Student and Branch add successfully" });
      }
    } else {
      res.status(400).json({ message: "Please check payload" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllClgStdBranch = async (req, res) => {
  try {
    const allKides = await clgStdBranchService.getAllClgStdBranch();
    if (allKides) {
      res.status(200).json({ data: allKides });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createClgStdBranch,
  getAllClgStdBranch,
};
