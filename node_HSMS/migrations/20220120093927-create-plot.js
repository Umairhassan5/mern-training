'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Plots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plot_size: {
        type: Sequelize.BIGINT,
        allowNull:false
      },
      plot_phase: {
        type: Sequelize.STRING,
        allowNull:false
      },
      plot_block: {
        type: Sequelize.STRING,
        allowNull:false
      },
      plot_type: {
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Plots');
  }
};