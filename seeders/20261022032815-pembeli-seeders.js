'use strict'; 
 
/** @type {import('sequelize-cli').Migration} */ 
module.exports = { 
  async up(queryInterface, Sequelize) { 
    await queryInterface.bulkInsert('Pembeli', [ 
      { 
        nama: 'Dimas Prasetyo', 
        jns_kelamin: 'Laki-laki', 
        alamat: 'Jl. Senopati No. 24, Kebayoran Baru', 
        kode_pos: '12190', 
        kota: 'Jakarta Selatan', 
        tgl_lahir: '1998-04-12', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        nama: 'Clarissa Natalia', 
        jns_kelamin: 'Perempuan', 
        alamat: 'Cluster Catalina Blok AB No. 15, Gading Serpong', 
        kode_pos: '15810', 
        kota: 'Tangerang Selatan', 
        tgl_lahir: '2001-09-25', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        nama: 'Rizky Ramadhan', 
        jns_kelamin: 'Laki-laki', 
        alamat: 'Jl. Margonda Raya No. 102, Kemiri Muka', 
        kode_pos: '16423', 
        kota: 'Depok', 
        tgl_lahir: '1996-11-03', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        nama: 'Kevin Sanjaya', 
        jns_kelamin: 'Laki-laki', 
        alamat: 'Grand Galaxy City Blok RG No. 8', 
        kode_pos: '17147', 
        kota: 'Bekasi', 
        tgl_lahir: '1999-07-18', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { 
        nama: 'Aditya Pratama', 
        jns_kelamin: 'Laki-laki', 
        alamat: 'Jl. Pajajaran No. 88, Baranangsiang', 
        kode_pos: '16143', 
        kota: 'Bogor', 
        tgl_lahir: '1997-02-14', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      } 
    ], {}); 
  }, 
 
  async down(queryInterface, Sequelize) { 
    await queryInterface.bulkDelete('Pembeli', null, {}); 
  } 
}; 