const { User } = require('../models');

const userData = [
    
        {
          "username": "Toby",
          "password": "password12345"
        },
        {
          "username": "Tybalt",
          "password": "password12345"
        },
        {
          "username": "Quentin",
          "password": "password12345"
        }
      ]

      const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
      
