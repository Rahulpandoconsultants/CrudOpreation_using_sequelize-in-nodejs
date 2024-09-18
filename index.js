const express = require('express');
const sequelize = require('./config/db'); // Sequelize instance
const userRoutes = require('./routes/EmpRoutes'); // Import user routes
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Test Database connection and Sync models
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');

    await sequelize.sync(); // Sync models with the database
    console.log('Models synchronized with the database.');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start the server:', error);
  }
}

startServer();
