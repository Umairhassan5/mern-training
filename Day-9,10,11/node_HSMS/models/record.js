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
    record_name: DataTypes.STRING,
    record_cnic: DataTypes.BIGINT,
    record_mobile: DataTypes.BIGINT,
    record_installments: DataTypes.BIGINT,
    record_challan: DataTypes.STRING,
    record_payment: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Record',
  });
  return Record;
};