
const express = require('express');
const { analyzeFileHandler } = require('../controllers/aiController');
const router = express.Router();

router.post('/analyze', analyzeFileHandler);  

module.exports = router;

