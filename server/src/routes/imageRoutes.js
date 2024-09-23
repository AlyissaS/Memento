const express = require('express');
const router = express.Router();
const { createImageHandler, getImagesHandler } = require('../controllers/imageController');

router.post('/', createImageHandler);
router.get('/', getImagesHandler);

module.exports = router;
