const router = require('express').Router();
const verifyTokenMiddleware = require('../middleware/verifyToken.middleware');
const UserController = require('../controller/user.controller');




router.get('/user/:phone', verifyTokenMiddleware , UserController.getUserByPhoneNumber);

router.post('/user',verifyTokenMiddleware,  UserController.createUser);


module.exports = router;