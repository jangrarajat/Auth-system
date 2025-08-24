const express = require('express')
const router = express.Router();
const { signupValidation, loginValidation } = require('../Middlewares/authValidation');
const { signup, login } = require('../Controllers/authController');

router.post('/login', loginValidation, login)

router.post('/signup', signupValidation, signup)


module.exports = router;