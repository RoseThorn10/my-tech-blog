const router = require('express').Router();
// const { post } = require('.');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// 1) give user a homepage w/ posts that include id
router.get('/', async (req, res) => {
    const dbPostData = await Post.findAll({
        include: [
            {
                model: User
            },
        ],
    });

    const posts = dbPostData.map(post => post.get({ plain: true }));
    // sanity check you posts
    // console.log(posts)
    // res.json(posts);
    res.render('all-posts', {
        posts: posts,
        isLoggedIn: false // req.session.loggedIn
    });
});

module.exports = router;