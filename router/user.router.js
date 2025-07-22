const router = require('express').Router();
const verifyTokenMiddleware = require('../middleware/verifyToken.middleware');
const UserController = require('../controller/user.controller');


// User routes (Create User)
router.post('/create-user',  UserController.createUser);

module.exports = router;