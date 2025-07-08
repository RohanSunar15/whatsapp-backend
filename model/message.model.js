const { text } = require('body-parser');
const { Timestamp } = require('firebase-admin/firestore');
const mongooose = require('mongoose');


const messageSchema = new mongooose.Schema({
  senderId: {type: String, required: true},
  receiverId: {type: String, required: true},
  text: {type: String, required: true},
  conversationId: { type: String, required: true },
  status: { type: String, enum: ['sent', 'delivered', 'seen'], default: 'sent' },
},
{timestamps: true, versionKey: false },);

messageSchema.index({ conversationId: 1, createdAt: 1 });


module.exports = mongooose.model('Message', messageSchema);