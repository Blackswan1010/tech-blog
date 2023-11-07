const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Getting all posts
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User }]
        });

        if (postData) {
            res.status(200).json(postData);
        } else {
            res.status(404).json({ message: 'Posts not found!' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Getting a post
router.get("/:id", async (req, res) => {
    try {
        const postData = await Post.findOne({
            include: [{ model: User }, { model: Comment }]
        });

        if (postData) {
            res.status(200).json(postData);
        } else {
            res.status(404).json({ message: 'Post not found!' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Deleting a post
router.delete("/:id", async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: req.params.id
        });

        if (postData) {
            res.status(200).json({ message: 'Post deleted!' });
        } else {
            res.status(404).json({ message: 'Post not found!' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Updating a post
router.put("/:id", async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.body.id,
            },
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Creating a post
router.post("/:id", async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            author_id: req.session.user_id,
        });
        if (newPost) {
            res.status(200).json(newPost);
        } else {
            res.status(400).json({ message: 'Failed to post a new blog' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;