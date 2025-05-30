// categoryRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const loginController = require('../controller/signup');

router.post('/signup', loginController.signup);
router.post('/login', loginController.login);


// Export the router
module.exports = router;
