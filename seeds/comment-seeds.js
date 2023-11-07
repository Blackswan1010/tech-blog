const { Comment } = require("../models");

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: "This is a cool concept, and I had a tough time learning it."
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "You're going to love it, very much worth your time."
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "Can anyone help me understand how to use handlebars?"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "In 3 months, really?!?"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "That's awesome to become a full stack web developer in 3 months!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Eliminating or reducing lines of unneeded code is very satisfying."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Very fast pace!"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "The staff provide a lot of support!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;