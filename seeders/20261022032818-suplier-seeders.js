'use strict'; 
 
/** @type {import('sequelize-cli').Migration} */ 
module.exports = { 
  async up(queryInterface, Sequelize) { 
    await queryInterface.bulkInsert('Suplier', [ 
      { 
        nama: 'PT HSR Wheel Indonesia', 
        alamat: 'Jl. Boulevard Raya Blok QJ5 No. 18, Kelapa Gading', 
        kode_pos: '14240', 
        kota: 'Jakarta Utara', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        nama: 'JF Luxury Wheels Official', 
        alamat: 'Komp. Ruko Paramount Dotcom Blok A No. 10', 
        kode_pos: '15810', 
        kota: 'Tangerang', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        nama: 'Permaisuri Ban (Distributor Rays & Enkei)', 
        alamat: 'Jl. Mahakam I No. 5, Kramat Pela, Kebayoran Baru', 
        kode_pos: '12130', 
        kota: 'Jakarta Selatan', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        nama: 'Eurokars Wheel Gallery (Distributor HRE & Vossen)', 
        alamat: 'Jl. Sultan Iskandar Muda No. 51', 
        kode_pos: '12240', 
        kota: 'Jakarta Selatan', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      } 
    ], {}); 
  }, 
 
  async down(queryInterface, Sequelize) { 
    await queryInterface.bulkDelete('Suplier', null, {}); 
  } 
}; 