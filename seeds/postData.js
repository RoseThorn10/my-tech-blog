const { Post } = require('../models');

const postData = [
    {
        title: "post1",
        body: "some text here",
        createdAt: "October 10, 2022"
    },
    {
        title: "post2",
        body: "more text",
        createdAt: "October 20, 2022"
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;