const { Post } = require("../models");

const postData = [
    {
        title: 'Cleaning Code',
        content: 'I love drying up code and refactoring.',
        author_id: 1,
    },
    {
        title: 'Fast Coding Bootcamp in 3 months',
        content: 'Halfway through this course and I\'m still here!',
        author_id: 2,
    },
    {
        title: 'Model View Controller handlebars',
        content: 'I\m learning how to use this concept.',
        author_id: 1,
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;