const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken.middleware');
const UserController = require('../controller/user.controller');




router.get('/user/:phone', verifyToken , UserController.getUserByPhoneNumber);


router.post('/user', UserController.createUser);


module.exports = router;