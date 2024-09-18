const { storage } = require('../config/firebase'); 
const { Storage } = require('@google-cloud/storage');

const uploadFileToCloudStorage = async (filePath, destination) => {
    await storage.bucket(process.env.GCS_BUCKET_NAME).upload(filePath, {
      destination: destination,
    });

  const publicUrl = `https://storage.googleapis.com/${process.env.GCS_BUCKET_NAME}/${destinationPath}`;
  return publicUrl;
};

module.exports = { uploadFileToCloudStorage };
