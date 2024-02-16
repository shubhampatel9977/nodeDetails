const sequelize = require("../config/sequelize");
const { KideModel, GameModel } = require('../models/kide_game');

const createKideGame = async(payload) => {
    try{
      // console.log('createKideGame -->', payload);
      let transaction = await sequelize.transaction();
      const newKide = await KideModel.create(payload, { transaction });

      await Promise.all(payload.skill_name.map(async (skill) => {
        await GameModel.create({ k_id: newKide.kide_id, skill_name: skill }, { transaction });
      }));
      await transaction.commit();

      return true;
    } catch (error) {
      if (transaction) await transaction.rollback();
      console.error("Someting wrong in createKideGame", error.message);
      return false;
    }
}

const getAllKideGame = async() => {
    try {
      const kides = await KideModel.findAll({
        include: {
          model: GameModel,
          required: false // Use `required: false` if you want to include kides even if they don't have associated games
        }
      });
      return kides ? kides : false;
    } catch (error) {
      console.error("Someting wrong in getAllKideGame", error.message);
    }
}

module.exports = {
  createKideGame,
  getAllKideGame,
};