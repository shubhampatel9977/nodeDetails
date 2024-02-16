const kideGameService = require("../services/kideGameService");

const createKideGame = async (req, res) => {
  try {
    const { name, age, skill_name } = req.body;

    if (name && age && skill_name) {
      const result = await kideGameService.createKideGame({
        name,
        age,
        skill_name,
      });
      if (result) {
        res.status(201).json({ message: "Kide and game add successfully" });
      }
    } else {
      res.status(400).json({ message: "Please check payload" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllKideGame = async (req, res) => {
  try {
    const allKides = await kideGameService.getAllKideGame();
    if (allKides) {
      res.status(200).json({ data: allKides });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createKideGame,
  getAllKideGame,
};
