'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(Sequelize, Sequelize) {
    // UP - create the 'payment_status' table
    await Sequelize.createTable(
      'payment_status',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING(30),
          allowNull: false,
          unique: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      }
    );
  },

  async down(Sequelize, Sequelize) {
    // DOWN - Drop the 'payment_status' table
    await Sequelize.dropTable('payment_status');
  }
};