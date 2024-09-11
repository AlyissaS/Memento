const { createUser, getUserProfile } = require('../models/userModel');

// Controller to handle creating a new user profile
const createUserHandler = async (req, res) => {
  try {
    const userData = req.body; // Capture the user data from the request body
    const newUser = await createUser(userData); // Call the createUser function from the model
    res.status(201).json(newUser); // Respond with the newly created user data
  } catch (error) {
    res.status(500).json({ error: error.message }); // Respond with error message if something goes wrong
  }
};

// Controller to handle fetching a user profile by ID
const getUserHandler = async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from the URL params
    const user = await getUserProfile(userId); // Call the getUserProfile function from the model
    res.status(200).json(user); // Respond with the user data
  } catch (error) {
    res.status(404).json({ error: error.message }); // If the user is not found, respond with 404
  }
};

module.exports = {
  createUserHandler,
  getUserHandler,
};
