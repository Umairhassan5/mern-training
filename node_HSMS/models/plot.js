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
    plot_size: 
    {
      type:DataTypes.NUMBER,
      allowNull:false,
      validate:{
        notNull: true,            // won't allow null
        notEmpty: true,
        isNumeric:true
      }
    },
    plot_phase: 
    {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: true,            // won't allow null
        notEmpty: true,
      }
    },
    plot_block: 
    {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: true,            // won't allow null
        notEmpty: true,
      }
    },
    plot_type: 
    {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: true,            // won't allow null
        notEmpty: true,
      }
    }
  }, {
    sequelize,
    modelName: 'Plot',
  });
  return Plot;
};