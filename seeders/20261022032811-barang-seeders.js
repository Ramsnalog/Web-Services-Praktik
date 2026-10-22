'use strict'; 
 
/** @type {import('sequelize-cli').Migration} */ 
module.exports = { 
  async up(queryInterface, Sequelize) { 
    await queryInterface.bulkInsert('Barang', [ 
      { 
        nama: 'HSR Wheel Myth01', 
        varian: 'Ring 18 PCD 5x114.3 Matte Black', 
        harga_beli: 6000000, 
        harga_jual: 7500000, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        nama: 'JF Luxury Flow Form JFO3', 
        varian: 'Ring 17 PCD 4x100 Gloss Gunmetal', 
        harga_beli: 5000000, 
        harga_jual: 6200000, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        nama: 'Volk Rays TE37 Saga S-Plus', 
        varian: 'Ring 18 PCD 5x114.3 Bronze Original', 
        harga_beli: 42000000, 
        harga_jual: 49000000, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        nama: 'Enkei RPF1 Racing Series', 
        varian: 'Ring 17 PCD 5x114.3 Silver', 
        harga_beli: 22000000, 
        harga_jual: 26500000, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        nama: 'Vossen HF-2 Hybrid Forged', 
        varian: 'Ring 20 PCD 5x112 Tinted Gloss Black', 
        harga_beli: 38000000, 
        harga_jual: 45000000, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        nama: 'HRE Wheels P101 Monoblok', 
        varian: 'Ring 21 PCD 5x112 Brushed Titanium', 
        harga_beli: 95000000, 
        harga_jual: 115000000, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      } 
    ], {}); 
  }, 
 
  async down(queryInterface, Sequelize) { 
    await queryInterface.bulkDelete('Barang', null, {}); 
  } 
}; 