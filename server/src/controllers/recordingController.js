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
    const { recordingId } = req.params;
    if (!recordingId) {
      return res.status(400).json({ error: 'Recording ID is required' });
    }
    const recording = await getRecordingById(recordingId);
    if (!recording) {
      return res.status(404).json({ error: 'Recording not found' });
    }
    return res.json(recording);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getRecordingByIdHandler = async (req, res) => {
  try {
    const { recordingId } = req.params; 
    if (!recordingId) {
      return res.status(400).json({ error: 'Recording ID is required' });
    }
    const recording = await getRecordingById(recordingId);
    if (!recording) {
      return res.status(404).json({ error: 'Recording not found' });
    }
    return res.json(recording);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRecordings,
  createRecordingHandler,
  getRecordingByIdHandler,
};
