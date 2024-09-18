const User = require('../models/Employee'); 

// Fetch all users
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
}

// Create a new user
async function createUser(req, res) {
  try {
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({ firstName, lastName, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
}

// Delete user
async function deleteUser(req,res){
    try{
        const id =req.params.id;
        const deletedUser = await User.destroy({where:{id}});
        if(deleteUser===0){
            res.status(404).json({message:"Error in deleting the user"})
        }else{
            res.status(200).json({message:"The user deleted successfully"})
        }
    }
    catch(error){
        res.status(500).json({message:'Error in deleting User',error});
    }
}

//Update User

async function UpdateUser(req,res){
try{
    const id=req.params.id;
    const {firstName,lastName,email}=req.body;
    const updateduser= await User.update({firstName,lastName,email},{where:{id}});
    // `result` is an array where the first element is the number of affected rows
    if(updateduser[0]===0){
        res.status(404).json({message:"Error in updating the user"})
    }else{
        res.status(200).json({message:"The user is Updated successfully"})
    }
}
catch(error){
    res.status(500).json({message:'Error in Updating User',error});
}
}

module.exports = { getAllUsers, createUser,deleteUser,UpdateUser};
