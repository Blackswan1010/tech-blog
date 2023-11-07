const { User } = require("../models");

const userData = [
    {
        username: 'user1',
        email: 'user1@gmail.com',
        password: '1234',
    },
    {
        username: 'user2',
        email: 'user2@gmail.com',
        password: '4321',
    },
    {
        username: 'user3',
        email: 'user3@gmail.com',
        password: '102938',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;