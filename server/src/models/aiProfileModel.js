
const { db, FieldValue } = require('../config/firebase');

const aiProfileModel = {
  userId: '',
  profileData: '',
  lastUpdated: FieldValue.serverTimestamp()
};

const createOrUpdateAIProfile = async (aiProfileData) => {
  const aiProfileRef = db.collection('aiProfiles').doc(aiProfileData.userId);
  await aiProfileRef.set(aiProfileData, { merge: true });
  return aiProfileData;
};

const getAIProfileByUserId = async (userId) => {
  const aiProfileRef = db.collection('aiProfiles').doc(userId);
  const doc = await aiProfileRef.get();
  if (!doc.exists) {
    throw new Error('AI Profile not found');
  }
  return doc.data();
};

module.exports = {
  createOrUpdateAIProfile,
  getAIProfileByUserId
};
