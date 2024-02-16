const sequelize = require("../config/sequelize");
const { UserModel, AddressModel } = require('../models/user_address');

const createUserAdd = async(payload) => {
    try{
      let transaction = await sequelize.transaction();
      const newUser = await UserModel.create(payload, { transaction });
      const result = await AddressModel.create({ u_id: newUser.user_id, ...payload }, { transaction });
      await transaction.commit();
      return result ? true : false;
    } catch (error) {
      if (transaction) await transaction.rollback();
      console.error("Someting wrong in createStudent", error.message);
    }
}

const getAllUserAdd = async() => {
    try {
      const users = await UserModel.findAll({ include: AddressModel });
      return users ? users : false;
    } catch (error) {
      console.error("Someting wrong in getAllUserAdd", error.message);
    }
}

module.exports = {
    createUserAdd,
    getAllUserAdd,
};