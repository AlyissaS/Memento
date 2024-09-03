const { createUser, getUserById } = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await getUserById(userId);
      return res.json(user);
    }
    return res.status(404).json({ message: 'User not found' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createUserHandler = async (req, res) => {
  try {
    const userData = req.body;
    const user = await createUser(userData);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  createUserHandler
};

  