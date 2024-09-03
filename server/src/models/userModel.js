const firebase = require('../config/firebase');

const userModel = {
  userId: '',
  name: '',
  email: '',
  role: 'client', // 'admin' or 'family'
  profilePicture: ''
};

const createUser = async (userData) => {
  const userRef = firebase.firestore().collection('users').doc(userData.userId);
  await userRef.set(userData);
  return userData;
};

const getUserById = async (userId) => {
  const userRef = firebase.firestore().collection('users').doc(userId);
  const doc = await userRef.get();
  if (!doc.exists) {
    throw new Error('User not found');
  }
  return doc.data();
};

module.exports = {
  userModel,
  createUser,
  getUserById
};
