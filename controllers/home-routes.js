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

// when a user goes to thiswebsite.com/login
// send them an html page
router.get('/login', async (req, res) => {
    // use the render function to tell handlebars to use the login template
    res.render('login', {
    });
});

router.get('/signup', async (req, res) => {
    // use the render function to tell handlebars to use the signup template
    res.render('signup', {
    });
});

router.get('/dashboard', async (req, res) => {
    // get all posts from the db using your model
    const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
    console.log(postData) // sanity check
    // create a copy of the postdata, loop thru it and simplify each element
    const allPosts = postData.map(function(post) {
        return post.get({ plain: true })
    });

    console.log(allPosts); // sanity check
    // get the login value from session if needed

    // render the html page with a diff layout
    res.render('all-posts-admin', {
        layout: 'dashboard',
        posts: allPosts
    })

});

module.exports = router;