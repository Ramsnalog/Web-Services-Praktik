'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pembelian', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_barang: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Barang',
          key: 'id'
        },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
      },
      id_suplier: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Suplier',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      qty: {
        type: Sequelize.INTEGER
      },
      tgl: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Pembelian');
  }
};