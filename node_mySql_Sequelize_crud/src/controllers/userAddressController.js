const userAddService = require("../services/userAddressService");

const createUserAdd = async(req, res) => {
    try {
      const { name, age, city, state, country } = req.body
  
      if(name && age && city && state && country) {
        const result = await userAddService.createUserAdd({ name, age, city, state, country });
        if(result) {
          res.status(201).json({ message: "User and address add successfully" });
        }
      } else {
        res.status(400).json({ message: "Please check payload" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const getAllUserAdd = async(req, res) => {
    try{
      const allStudents = await userAddService.getAllUserAdd();
      if(allStudents) {
        res.status(200).json({ data: allStudents });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createUserAdd,
    getAllUserAdd,
  };