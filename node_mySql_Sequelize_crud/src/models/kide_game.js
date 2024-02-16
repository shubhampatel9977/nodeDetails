const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

// Define Kide model
const KideModel = sequelize.define('Kide', {
    kide_id: {
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
    }
  });

// Define Game model
const GameModel = sequelize.define('Game', {
    k_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    skill_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

// Establish one-to-many relationship between Kide and Game
GameModel.belongsTo(KideModel, { foreignKey: 'k_id', onDelete: 'CASCADE' });
KideModel.hasMany(GameModel, { foreignKey: 'k_id', onDelete: 'CASCADE' });

// Export models
module.exports = { KideModel, GameModel };