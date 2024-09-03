const firebase = require('../config/firebase');

const notificationModel = {
  notificationId: '',
  userId: '',
  message: '',
  timeSent: firebase.firestore.FieldValue.serverTimestamp(),
  response: ''
};

const createNotification = async (notificationData) => {
  const notificationRef = firebase.firestore().collection('notifications').doc(notificationData.notificationId);
  await notificationRef.set(notificationData);
  return notificationData;
};

const getNotificationsByUserId = async (userId) => {
  const notificationsRef = firebase.firestore().collection('notifications').where('userId', '==', userId);
  const snapshot = await notificationsRef.get();
  if (snapshot.empty) {
    return [];
  }
  return snapshot.docs.map(doc => doc.data());
};

module.exports = {
  notificationModel,
  createNotification,
  getNotificationsByUserId
};
