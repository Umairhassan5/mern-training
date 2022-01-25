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
    new_owner_name: 
    {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: true,
        notEmpty: true,
        len: [3, 40]
      }
    },
    new_owner_cnic: 
    {
      type:DataTypes.NUMBER,
      allowNull:false,
      validate:{
        len: [3, 13],
        notNull: true,            // won't allow null
        notEmpty: true,
      },
    },
    fileTransferCustomerId: 
    {
      type:DataTypes.NUMBER,
      allowNull:false,
      validate:{
        notNull: true,            // won't allow null
        notEmpty: true,
      }
    }
  }, {
    sequelize,
    modelName: 'fileTranfer',
  });
  return fileTranfer;
};