const firebase = require('../config/firebase');

const aiProfileModel = {
  userId: '',
  profileData: '',
  lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
};

const createOrUpdateAIProfile = async (aiProfileData) => {
  const aiProfileRef = firebase.firestore().collection('aiProfiles').doc(aiProfileData.userId);
  await aiProfileRef.set(aiProfileData, { merge: true });
  return aiProfileData;
};

const getAIProfileByUserId = async (userId) => {
  const aiProfileRef = firebase.firestore().collection('aiProfiles').doc(userId);
  const doc = await aiProfileRef.get();
  if (!doc.exists) {
    throw new Error('AI Profile not found');
  }
  return doc.data();
};

module.exports = {
  aiProfileModel,
  createOrUpdateAIProfile,
  getAIProfileByUserId
};
