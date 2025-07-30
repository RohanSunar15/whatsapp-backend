const MessageService = require('../service/message.service');

class MessageController {
    async sendMessage(req,res, next){
        try {
            const {senderId, receiverId, text} = req.body;
            const message = await MessageService.sendMessage({senderId, receiverId, text});
            return res.status(200).json({ status: true, message: message });
        
        } catch (error) {
            return res.status(500).json({ status: false, message: error.message });
        }
    }

    async getChatMessages(req, res, next){
        console.log("Fetching chat messages");
        console.log(req.params);
        try {
            const { conversationId } = req.params;

           if (!conversationId) {
            return res.status(400).json({ status: false, message: 'Conversation ID is required' });
        }

            const messages = await MessageService.getChatMessages(conversationId);
            return res.status(200).json({ status: true, messages });
            
        } catch (error) {
            return res.status(500).json({ status: false, message: error.message });
        }
    }

        async getConversationList(req, res, next) {
            try {
                const {userId}  = req.params;

                if (!userId || userId.trim() === "") {
                    return res.status(400).json({
                        status: false,
                        message: "User ID required",
                    });
                }

                const conversations = await MessageService.getConversationList(userId);
                return res.status(200).json({ status: true, conversations });

            } catch (error) {
                return res.status(500).json({ status: false, message: error.message });
            }
        }
}

module.exports = new MessageController();