'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Record.init({
    record_name: 
    {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        is: ["^[a-zA-Z ]*$",'i'],
        notNull: true,
        notEmpty: true,
        len: [3, 40]
      }
    },
    record_cnic: 
    {
      type:DataTypes.BIGINT,
      allowNull:false,
      validate:{
        len: [3, 13],
        notNull: true,            // won't allow null
        notEmpty: true,
      },
    },
    record_mobile: 
    {
      type:DataTypes.BIGINT,
      allowNull:false,
      validate:{
        len: [3, 11],
        notNull: true,            // won't allow null
        notEmpty: true,
        isNumeric: true,
      }
    },
    record_installments: 
    {
      type:DataTypes.BIGINT,
      allowNull:false,
      validate:{
        notNull: true,            // won't allow null
        notEmpty: true,
      }
    },
    record_challan: 
    {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: true,            // won't allow null
        notEmpty: true,
      }
    },
    record_payment: 
    {
     type: DataTypes.BIGINT,
     allowNull:false,
      validate:{
        notNull: true,            // won't allow null
        notEmpty: true,
      }
    },
  }, {
    sequelize,
    modelName: 'Record',
  });
  return Record;
};