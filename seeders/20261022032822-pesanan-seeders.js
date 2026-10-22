'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pesanan', [
      {
        id_pelanggan: 1,
        id_barang: 1,
        qty: 1,
        tgl_pesan: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_pelanggan: 2,
        id_barang: 4,
        qty: 1,
        tgl_pesan: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_pelanggan: 3,
        id_barang: 3,
        qty: 1,
        tgl_pesan: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pesanan', null, {});
  }
};

