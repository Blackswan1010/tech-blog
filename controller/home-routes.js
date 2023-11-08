const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const postData = await Post.findAll({
            order: [['creation_date', 'DESC']],
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



router.get('/posts/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ],
        });

        const post = postData.get({ plain: true });

        res.render('posts', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
    } else {
        res.render('login');
    }
});


router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
    } else {
      res.render('signup');
    }
  });
  

router.get('/dashboard', async (req, res) => {
    if (req.session.loggedIn) {
        try {
            const postData = await Post.findAll({
                order: [['creation_date', 'DESC']],
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                        where: { id: req.session.user_id }
                    },
                ],
            });

            let posts = [];
            for (i = 0; i < postData.length; i++) {
                posts.push(postData[i].dataValues);
                posts[i].username = postData[i].dataValues.user.dataValues.username;
            };
            res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        res.render('dashboard')
    }
});

router.get('/newpost', (req, res) => {
    res.render('newpost', { loggedIn: req.session.loggedIn });
});

// Get a single post with comment for the post detail page
router.get('/edit/:id', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
  } else {
    try {
      const postData = await Post.findByPk(req.params.id);
      // Double check if the login user is the auther of the post
      if (req.session.user_id = postData.dataValues.author_id) {
        const post = {
          title: postData.dataValues.title,
          content: postData.dataValues.content,
          creation_date: postData.dataValues.creation_date,
        };
        res.render('edit', { post ,  loggedIn: req.session.loggedIn });
      } else {
        res.redirect('/');
      };
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});


module.exports = router;