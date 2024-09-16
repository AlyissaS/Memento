const { createOrUpdateAIProfile, getAIProfileByUserId } = require('../models/aiProfileModel');

const createOrUpdateAIProfileHandler = async (req, res) => {
  try {
    const aiProfileData = req.body;
    const updatedProfile = await createOrUpdateAIProfile(aiProfileData);
    res.status(201).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAIProfileHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const aiProfile = await getAIProfileByUserId(userId);
    res.status(200).json(aiProfile);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createOrUpdateAIProfileHandler,
  getAIProfileHandler,
};
