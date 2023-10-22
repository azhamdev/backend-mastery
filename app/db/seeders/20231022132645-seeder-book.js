'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books',
      [
        {
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
          image: '/uploads/image 1.png',
          publish: new Date(),
          price: 100000,
          stock: 10,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'A Game of Thrones',
          author: 'George R.R. Martin',
          image: '/uploads/image 2.png',
          publish: new Date(),
          price: 100000,
          stock: 40,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Budidaya Tanaman',
          author: 'Budi Budiman',
          image: '/uploads/image 3.png',
          publish: new Date(),
          price: 60000,
          stock: 22,
          user: 1,
          category: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
