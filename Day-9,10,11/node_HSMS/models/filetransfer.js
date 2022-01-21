'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fileTranfer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fileTranfer.belongsTo(models.Customer, {
        foreignKey: 'FileTransfer'
      });
    }
  }
  fileTranfer.init({
    new_owner_name: DataTypes.STRING,
    new_owner_cnic: DataTypes.NUMBER,
    fileTransferCustomerId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'fileTranfer',
  });
  return fileTranfer;
};