// syncModels.js
const sequelize = require('../config/db');
const User = require('../models/Employee');

async function syncModels() {
  try {
    await sequelize.sync({ force: false }); // `force: true` will drop the table if it already exists
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
}

syncModels();
