const Sequelize = require('sequelize');
require('dotenv').config();

// Create a connection object
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            // Database location
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
        }
    );
}

module.exports = sequelize;