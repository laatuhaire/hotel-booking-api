'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up(Sequelize, Sequelize) {

    // UP - create the 'room' table

    await Sequelize.createTable(

      'room',

      {

        id: {

          type: Sequelize.INTEGER,

          allowNull: false,

          primaryKey: true,

          unique: true,

          autoIncrement: true,

        },

        room_number: {

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

    // DOWN - Drop the 'room' table

    await Sequelize.dropTable('room');

  }

};