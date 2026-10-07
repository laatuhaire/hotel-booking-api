'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(Sequelize, Sequelize) {
    // UP - create the 'room_status' table
    await Sequelize.createTable(
      'room_status',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      }
    );
  },

  async down(Sequelize, Sequelize) {
    // DOWN - Drop the 'room-status' table
    await Sequelize.dropTable('room_status');
  }
};