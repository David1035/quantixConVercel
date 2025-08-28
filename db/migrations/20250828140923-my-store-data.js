'use strict';

const { UserSchema, USER_TABLE, User} = require('./../models/userModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    /**
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE)
    /**
     * Add reverting commands here.
     * await queryInterface.dropTable('users');
     */
  }
};
