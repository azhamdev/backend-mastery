'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = bcrypt.hashSync('admin', 10);
    // nama tablenya
    await queryInterface.bulkInsert('users',
      [
        {
          name: 'John Doe',
          email: 'admin@gmail.com',
          password: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Azham Doe',
          email: 'admin1@gmail.com',
          password: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
