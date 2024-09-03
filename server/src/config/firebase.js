const admin = require('firebase-admin');
const serviceAccount = require('./firebaseServiceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<your-database-name>.firebaseio.com"  // Replace with your actual database URL
});

const db = admin.firestore();

module.exports = db;
