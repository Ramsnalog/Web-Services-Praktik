'use strict';

const bcrypt = require('bcrypt'); // Panggil sekali di baris paling atas

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Generate hash terlebih dahulu agar kode lebih rapi dan cepat
    const adminPassword = await bcrypt.hash('adminpassword', 10);
    const userPassword = await bcrypt.hash('userpassword', 10);
    const johnPassword = await bcrypt.hash('johndoe123', 10);

    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        email: 'admin@example.com',
        password: adminPassword,
        role: 'admin',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'User',
        email: 'user@example.com',
        password: userPassword,
        role: 'user',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: johnPassword,
        role: 'user',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     await queryInterface.bulkInsert('users', [
//       {
//         name: 'Admin',
//         email: 'admin@example.com',
//         password: await require('bcrypt').hash('adminpassword', 10),
//         role: 'admin',
//         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'User',
//         email: 'user@example.com',
//         password: await require('bcrypt').hash('userpassword', 10),
//         role: 'user',
//         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         password: await require('bcrypt').hash('johndoe123', 10),
//         role: 'user',
//         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }
//     ], {});

//   },

//   async down (queryInterface, Sequelize) {
//     await queryInterface.bulkDelete('users', null, {});

//   }
// };
