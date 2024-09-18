require('dotenv').config(); // Load environment variables from .env file
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,     // Database name
  process.env.DB_USER,     // Database username
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST,    // Database host
    dialect: process.env.DB_DIALECT, // Dialect (MySQL in this case)
  }
);

module.exports = sequelize;
