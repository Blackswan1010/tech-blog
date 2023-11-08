const { Comment } = require("../models");

const commentData = [
    {
        author_id: 1,
        post_id: 3,
        content: "This is a cool concept, and I had a tough time learning it."
    },
    {
        author_id: 3,
        post_id: 3,
        content: "You're going to love it, very much worth your time."
    },
    {
        author_id: 2,
        post_id: 3,
        content: "Can anyone help me understand how to use handlebars?"
    },
    {
        author_id: 1,
        post_id: 2,
        content: "In 3 months, really?!?"
    },
    {
        author_id: 3,
        post_id: 2,
        content: "That's awesome to become a full stack web developer in 3 months!"
    },
    {
        author_id: 2,
        post_id: 1,
        content: "Eliminating or reducing lines of unneeded code is very satisfying."
    },
    {
        author_id: 3,
        post_id: 2,
        content: "Very fast pace!"
    },
    {
        author_id: 2,
        post_id: 2,
        content: "The staff provide a lot of support!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;