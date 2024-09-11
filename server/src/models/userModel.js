const db = require('../config/firebase'); // Assuming Firebase is set up properly

// Define the user model structure
const userModel = {
  userId: '',
  name: '',
  email: '',
  role: 'client', // 'admin' or 'family'
  profilePicture: ''
};

// Function to create a user profile in Firestore
const createUser = async (userData) => {
  try {
    const userRef = db.collection('users').doc(userData.userId); // Reference Firestore collection 'users'
    await userRef.set(userData); // Set the document with user data
    return userData; // Return the created user data
  } catch (error) {
    throw new Error(Error creating user: ${error.message}); // Handle errors
  }
};

// Function to get a user profile by userId from Firestore
const getUserProfile = async (userId) => {
  try {
    const userRef = db.collection('users').doc(userId); // Reference Firestore document
    const doc = await userRef.get(); // Get document snapshot
    if (!doc.exists) {
      throw new Error('User not found'); // Handle case where user does not exist
    }
    return doc.data(); // Return user data
  } catch (error) {
    throw new Error(Error fetching user: ${error.message}); // Handle errors
  }
};

// Export the functions and the model
module.exports = {
  userModel,
  createUser,
  getUserProfile
};
