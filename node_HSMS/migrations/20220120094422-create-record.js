'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      record_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      record_cnic: {
        type: Sequelize.BIGINT,
        allowNull:false
      },
      record_mobile: {
        type: Sequelize.BIGINT,
        allowNull:false
      },
      record_installments: {
        type: Sequelize.BIGINT,
        allowNull:false
      },
      record_challan: {
        type: Sequelize.STRING,
        allowNull:false
      },
      record_payment: {
        type: Sequelize.BIGINT,
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
    await queryInterface.dropTable('Records');
  }
};