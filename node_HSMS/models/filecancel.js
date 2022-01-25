'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fileCancel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      fileCancel.belongsTo(models.Customer, {
        foreignKey: 'fileCancelId',
        onDelete: 'CASCADE'
      })
    }
  }
  fileCancel.init({
    cancel_reason: 
    {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[8, 200],
        notNull: true,            // won't allow null
        notEmpty: true,
      }
    }
  }, {
    sequelize,
    modelName: 'fileCancel',
  });
  return fileCancel;
};