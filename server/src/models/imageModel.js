const firebase = require('../config/firebase');

const imageModel = {
  imageId: '',
  userId: '',
  imageUrl: '',
  description: '',
  uploadedAt: firebase.firestore.FieldValue.serverTimestamp()
};

const createImage = async (imageData) => {
  const imageRef = firebase.firestore().collection('images').doc(imageData.imageId);
  await imageRef.set(imageData);
  return imageData;
};

const getImagesByUserId = async (userId) => {
  const imagesRef = firebase.firestore().collection('images').where('userId', '==', userId);
  const snapshot = await imagesRef.get();
  if (snapshot.empty) {
    return [];
  }
  return snapshot.docs.map(doc => doc.data());
};

module.exports = {
  imageModel,
  createImage,
  getImagesByUserId
};
