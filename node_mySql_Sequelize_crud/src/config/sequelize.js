const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('MySqlWithSequelize','root','Demo@1234',{
  dialect: 'mysql',
  storage: 'localhost',
});

module.exports = sequelize;