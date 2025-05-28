const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateLogin } = require('../middleware/validation');

router.post('/register',authController.register);
router.post('/login', validateLogin, authController.login);
router.get('/me', authController.getCurrentUser);

module.exports = router;
