const { db, FieldValue } = require('../config/firebase');


const imageModel = {
  imageId: '',
  userId: '',
  imageUrl: '',
  description: '',
  uploadedAt: FieldValue.serverTimestamp()
};

const createImage = async (imageData) => {
  const imageRef = db.collection('images').doc(imageData.imageId);
  const newImage = {
    ...imageModel,
    ...imageData,
    uploadedAt: FieldValue.serverTimestamp(),
  };
  await imageRef.set(newImage);
  return newImage;
};

const getImagesByUserId = async (userId) => {
  const imagesRef = db.collection('images').where('userId', '==', userId);
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
