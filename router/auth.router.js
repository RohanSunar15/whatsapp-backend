const router = require('express').Router();
const AuthController = require('../controller/auth.controller')

// Auth routes (Verify User Token)
router.post('/verify-user',  AuthController.verifyUser);


module.exports = router;