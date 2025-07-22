const { text } = require('body-parser');
const { Timestamp } = require('firebase-admin/firestore');
const mongooose = require('mongoose');


const messageSchema = new mongooose.Schema({
  senderId: {type: String, required: true},
  receiverId: {type: String, required: true},
  text: {type: String, required: true},
  conversationId: { type: String, required: true },
  unreadCount: { type: Number, default: 0 },

  isCall: { type: Boolean, default: false }, 
  callType: { type: String, enum: ['voice', 'video', 'none'], default: 'none' },
  callStatus: { type: String, enum: ['none', 'missed', 'picked'], default: 'none' },

  status: { type: String, enum: ['sent', 'delivered', 'seen'], default: 'sent' },
},
{timestamps: true, versionKey: false },);

messageSchema.index({ conversationId: 1, createdAt: 1 });


module.exports = mongooose.model('Message', messageSchema);