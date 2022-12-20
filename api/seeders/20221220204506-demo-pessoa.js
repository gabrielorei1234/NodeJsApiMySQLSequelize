'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [{
      nome: 'Gabriel Barros',
      ativo: true,
      email: 'gabriel@gabriel.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});

  }
};
