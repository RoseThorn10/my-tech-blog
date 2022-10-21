const { User } = require('../models');

const userData = [
    
        {
          "userName": "Toby",
          "password": "password12345"
        },
        {
          "name": "Tybalt",
          "password": "password12345"
        },
        {
          "name": "Quentin",
          "password": "password12345"
        }
      ]

      const seedUsers = () => Post.bulkCreate(userData);

module.exports = seedUsers;
      
