const { uploadFileToCloudStorage } = require('../services/storageService');

const uploadHandler = async (req, res) => {
  try {
    const { filePath, destination } = req.body;
    const publicUrl = await uploadFileToCloudStorage(filePath, destination);
    res.status(200).json({ message: 'File uploaded successfully', url: publicUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadHandler };