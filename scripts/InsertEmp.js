
const User = require('../models/Employee'); // Import the User model

async function insertUser() {
  try {
    const user = await User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    });
    console.log('User inserted:', user.toJSON());
  } catch (error) {
    console.error('Error inserting user:', error);
  }
}

insertUser();
