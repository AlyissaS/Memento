const express = require('express');
const router = express.Router();
const { createOrUpdateAIProfileHandler, getAIProfileHandler } = require('../controllers/aiController');

router.post('/', createOrUpdateAIProfileHandler);
router.get('/:userId', getAIProfileHandler);

module.exports = router;
