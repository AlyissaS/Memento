const express = require('express');
const router = express.Router();
const { getRecordings, createRecording } = require('../controllers/recordingController');

router.get('/', getRecordings);
router.post('/', createRecording);

module.exports = router;
