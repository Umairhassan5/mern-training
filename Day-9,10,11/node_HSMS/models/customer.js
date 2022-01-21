'use strict';
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
    customer_name: DataTypes.STRING,
    customer_cnic: DataTypes.BIGINT,
    customer_mobile: DataTypes.BIGINT,
    customer_address: DataTypes.STRING,
    admin_email: DataTypes.STRING,
    admin_password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};