const express = require('express');
const router = express.Router();
const { getRecordings, createRecordingHandler, getRecordingByIdHandler  } = require('../controllers/recordingController');

router.get('/', getRecordings);
router.post('/', createRecordingHandler );
router.get('/:recordingId', getRecordingByIdHandler);

module.exports = router;
