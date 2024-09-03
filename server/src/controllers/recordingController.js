const { createRecording, getRecordingsByUserId } = require('../models/recordingModel');

const getRecordings = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    const recordings = await getRecordingsByUserId(userId);
    return res.json(recordings);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createRecordingHandler = async (req, res) => {
  try {
    const recordingData = req.body;
    const recording = await createRecording(recordingData);
    return res.status(201).json(recording);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRecordings,
  createRecordingHandler
};
