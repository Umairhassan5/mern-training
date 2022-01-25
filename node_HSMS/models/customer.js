'use strict';
const { get } = require('express/lib/response');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.fileTranfer, {
        foreignKey: 'fileTransferCustomerId',
        as: 'FTCustomerId'
      });
      Customer.hasOne(models.fileCancel, {
        foreignKey: 'fileCancelId',
        as: 'FCId'
      })
      
    }
  }
  Customer.init({
    customer_name:{
      type:DataTypes.STRING,
      allowNull:false,
      // validate:{
      //   is: ["^[a-zA-Z ]*$",'i'],
      //   notNull: true,
      //   notEmpty: true,
      //   len: [3, 40]
      // }
    } ,
    customer_cnic:
    {
      type:DataTypes.BIGINT,
      allowNull:false,
      validate:{
        len: [3, 13],
        notNull: true,            // won't allow null
        notEmpty: true,
      },
    },

    customer_mobile:
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
    customer_address: DataTypes.STRING,
    admin_email:
    { 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail: true,
        notNull: true,
        notEmpty: true,
      }
    },
    admin_password:
    {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[8, 20],
        notNull: true,            // won't allow null
        notEmpty: true,
      }
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};