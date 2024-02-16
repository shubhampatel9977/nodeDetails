const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const StudentsModel = sequelize.define("Students", {
  
  student_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  like: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = StudentsModel;
