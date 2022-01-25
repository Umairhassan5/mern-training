'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      customer_cnic: {
        type: Sequelize.BIGINT,
        allowNull:false
      },
      customer_mobile: {
        type: Sequelize.BIGINT,
        allowNull:false
      },
      customer_address: {
        type: Sequelize.STRING,
        allowNull:false
      },
      admin_email: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      admin_password: {
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
    await queryInterface.dropTable('Customers');
  }
};