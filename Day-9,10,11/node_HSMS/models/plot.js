'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  Plot.init({
    plot_size: DataTypes.NUMBER,
    plot_phase: DataTypes.STRING,
    plot_block: DataTypes.STRING,
    plot_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Plot',
  });
  return Plot;
};