const express = require('express');
const router = express.Router();
const { createUserHandler, getUserHandler  } = require('../controllers/userController');

router.post('/', createUserHandler);
router.get('/:userId', getUserHandler);

module.exports = router;

