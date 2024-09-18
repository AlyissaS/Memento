// src/controllers/aiController.js
const { analyzeFileWithAI } = require('../services/aiService');

const analyzeFileHandler = async (req, res) => {
  try {
    const { gcsFileUri, type } = req.body;
    const analysisResult = await analyzeFileWithAI(gcsFileUri, type);
    res.status(200).json({ result: analysisResult });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { analyzeFileHandler };
