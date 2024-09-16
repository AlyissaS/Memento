const admin = require('firebase-admin');
require('dotenv').config(); 

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
    clientId: process.env.FIREBASE_CLIENT_ID,
    authUri: process.env.FIREBASE_AUTH_URI,
    tokenUri: process.env.FIREBASE_TOKEN_URI,
    authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL,
    clientX509CertUrl: process.env.FIREBASE_CLIENT_CERT_URL
  }),
  databaseURL: "gs://memento-21aef.appspot.com"
});

const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue; 

module.exports = { db, FieldValue };
