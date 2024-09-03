const firebase = require('../config/firebase');

const recordingModel = {
  recordingId: '',
  userId: '',
  audioUrl: '',
  transcript: '',
  createdAt: firebase.firestore.FieldValue.serverTimestamp()
};

const createRecording = async (recordingData) => {
  const recordingRef = firebase.firestore().collection('recordings').doc(recordingData.recordingId);
  await recordingRef.set(recordingData);
  return recordingData;
};

const getRecordingsByUserId = async (userId) => {
  const recordingsRef = firebase.firestore().collection('recordings').where('userId', '==', userId);
  const snapshot = await recordingsRef.get();
  if (snapshot.empty) {
    return [];
  }
  return snapshot.docs.map(doc => doc.data());
};

module.exports = {
  recordingModel,
  createRecording,
  getRecordingsByUserId
};
