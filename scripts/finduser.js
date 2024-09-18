// scripts/findUsers.js
const User = require('../models/Employee'); // Import the User model

async function findUsers() {
  try {
    const users = await User.findAll();
    console.log('All users:', JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

findUsers();
