// routes/userRoutes.js
const express = require('express');
const { getAllUsers, createUser, deleteUser,UpdateUser } = require('../Controllers/EmpControllers');

const router = express.Router();

// Route to get all users
router.get('/users', getAllUsers);

// Route to create a new user
router.post('/users', createUser);

//delete user
router.delete('/users/:id',deleteUser)

//Update user
router.put('/users/:id',UpdateUser)

module.exports = router;
