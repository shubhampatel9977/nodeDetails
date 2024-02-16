const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");


// Define the ClgStudent model
const ClgStudentModel = sequelize.define('ClgStudent', {
    stud_id: {
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

// Define the Branch model
const BranchModel = sequelize.define('Branch', {
    clg_std_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    //   primaryKey: true,
    //   references: {
    //     model: ClgStudent,
    //     key: 'stud_id'
    //   }
    },
    branch_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

// Define the many-to-many relationship
ClgStudentModel.belongsToMany(BranchModel, { through: 'ClgStudentBranch', foreignKey: 'clg_std_id' });
BranchModel.belongsToMany(ClgStudentModel, { through: 'ClgStudentBranch', foreignKey: 'branch_id' });

// Export models
module.exports = { ClgStudentModel, BranchModel };