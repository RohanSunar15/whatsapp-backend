const express = require('express');
const MessageController = require('../controller/message.controller');
const verifyTokenMiddleware = require('../middleware/verifyToken.middleware');

const router = express.Router();


router.post('/send', verifyTokenMiddleware, MessageController.sendMessage);
router.get("/user/:conversationId", verifyTokenMiddleware, MessageController.getChatMessages);

//Conversation list Route
router.get('/conversations/:userId', verifyTokenMiddleware, MessageController.getConversationList);


module.exports = router;