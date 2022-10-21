const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.DATE
    // foreign key ref model: user key: id
  },
  {
    sequelize
  }
);

module.exports = Post;
