const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

// Define the Student1 model
const UserModel = sequelize.define('User', {
    user_id: {
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

// Define the Address model
const AddressModel = sequelize.define('Address', {
    u_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

// Define one-to-one relationship between Users and Address
AddressModel.belongsTo(UserModel, { foreignKey: 'u_id', onDelete: 'CASCADE' });
UserModel.hasOne(AddressModel, { foreignKey: 'u_id', onDelete: 'CASCADE' });

// Export models
module.exports = { UserModel, AddressModel };
