const { db, FieldValue } = require('../config/firebase');


const recordingModel = {
  recordingId: '',
  userId: '',
  audioUrl: '',
  transcript: '',
  createdAt:FieldValue.serverTimestamp() 
};

const createRecording = async (recordingData) => {
  try {
    const recordingRef = admin.firestore().collection('recordings').doc();  
    const recordingId = recordingRef.id; 

    const newRecording = {
      ...recordingModel,
      recordingId,
      ...recordingData,
      createdAt: FieldValue.serverTimestamp()  
    };

    await recordingRef.set(newRecording);  
    return newRecording;  
  } catch (error) {
    throw new Error(`Error creating recording: ${error.message}`);
  }
};

const getRecordingsByUserId = async (userId) => {
  const recordingsRef = admin.firestore().collection('recordings').where('userId', '==', userId);
  const snapshot = await recordingsRef.get();
  if (snapshot.empty) {
    return [];
  }
  return snapshot.docs.map(doc => doc.data());
};

const getRecordingById = async (recordingId) => {
  const recordingRef = admin.firestore().collection('recordings').doc(recordingId);
  const doc = await recordingRef.get();
  if (!doc.exists) {
    return null; 
  }
  return doc.data(); 
};

module.exports = {
  recordingModel,
  createRecording,
  getRecordingsByUserId,
  getRecordingById 
};
