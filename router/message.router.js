const express = require('express');
const MessageController = require('../controller/message.controller');
const verifyFirebaseToken = require('../middleware/verifyToken.middleware');

const router = express.Router();


router.post('/send', verifyFirebaseToken, MessageController.sendMessage);
router.get("/user/:userId", verifyFirebaseToken, MessageController.getChatMessages);

//Conversation list Route
router.get('/conversations/:userId', verifyFirebaseToken, MessageController.getConversationList);


module.exports = router;