const admin = require('firebase-admin');
const { Storage } = require('@google-cloud/storage');
require('dotenv').config(); 

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
  storageBucket: process.env.GCS_BUCKET_NAME, 
  databaseURL: "gs://memento-21aef.appspot.com"
});

const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;

const storage = new Storage(); 

module.exports = { db, FieldValue, storage };
