const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
      // foreign key ref model: user key id
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;
