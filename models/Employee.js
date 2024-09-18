// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import the configured sequelize instance

// Define the User model
const emp = sequelize.define('emp_list', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  
});

module.exports = emp;
