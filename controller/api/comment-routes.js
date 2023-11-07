const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{ model: User }, { model: Post }],
            where: { post_id: req.params.id }
        });

        if (commentData) {
            res.status(200).json(commentData);
        } else {
            res.status(404).json('Comments not found!');
        }
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const commentData = await Comment.findOne({
            include: [{ model: User }, { model: Post }],
            where: { post_id: req.params.id }
        });

        if (commentData) {
            res.status(200).json(commentData);
        } else {
            res.status(404).json('Comment not found!');
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/:id", async (req, res) => {
    try {
        const newComment = await Comment.create({
            content_text: req.body.comment,
            post_id: req.body.post_id,
            author_id: req.session.user_id,
        });

        if (newComment) {
            res.status(200).json(newComment);
        } else {
            res.status(400).json({ message: 'Failed to add comment' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});