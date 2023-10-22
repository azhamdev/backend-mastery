'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories',
      [
        {
          name: 'Novel',
          user: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Comics',
          user: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Agriculture',
          user: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
