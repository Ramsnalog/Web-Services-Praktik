'use strict'; 
 
/** @type {import('sequelize-cli').Migration} */ 
module.exports = { 
  async up(queryInterface, Sequelize) { 
    await queryInterface.bulkInsert('Pembelian', [ 
      { 
        id_barang: 1,  
        id_suplier: 1,  
        qty: 10, 
        tgl: new Date(), 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        id_barang: 3,  
        id_suplier: 3,  
        qty: 4, 
        tgl: new Date(), 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        id_barang: 5,  
        id_suplier: 4,  
        qty: 2, 
        tgl: new Date(), 
        createdAt: new Date(), 
        updatedAt: new Date() 
      } 
    ], {}); 
  }, 
 
  async down(queryInterface, Sequelize) { 
    await queryInterface.bulkDelete('Pembelian', null, {}); 
  } 
}; 