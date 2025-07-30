const { default: mongoose } = require('mongoose');
const Message = require('../model/message.model');


exports.sendMessage = async ({senderId, receiverId, text}) => {
    const conversationId = [senderId, receiverId].sort().join('_');
    const message = new Message({senderId, receiverId, text, conversationId,});
    return await message.save();
}

exports.getChatMessages = async (conversationId) => {
    return await Message.find({conversationId}).sort({ createdAt: 1 });
}

exports.getConversationList = async (userId) => {
    return await Message.aggregate([
    {
      $match: {
        $or: [
          { senderId: userId },
          { receiverId: userId }
        ]
      }
    },
    { $sort: { createdAt: -1 } },
    {
      $group: {
        _id: "$conversationId",
        conversationId: { $first: "$conversationId" },
        lastMessage: { $first: "$text" },
        lastSenderId: { $first: "$senderId" },
        lastReceiverId: { $first: "$receiverId" },
        timestamp: { $first: "$createdAt" },
        unreadCount: {$first: "$unreadCount"},
        isCall: { $first: "$isCall" },
        callType: { $first: "$callType" },
        callStatus: { $first: "$callStatus" },
        status: { $first: "$status" }
      
      }
    },
    {
      $addFields: {
        otherUserId: {
          $cond: [
            { $eq: ["$lastSenderId", userId] },
            "$lastReceiverId",
            "$lastSenderId"
          ]
        }
      }
    },
    {
     $lookup: {
        from: "users",
        let: { otherId: "$otherUserId" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$_id", { $toObjectId: "$$otherId" }]
              }
            }
          }
        ],
        as: "otherUser"
      }
    },
    { $unwind: "$otherUser" },
    {
      $project: {
        _id: 0,
        conversationId: 1,
        lastMessage: 1,
        isCall: 1,
        callType: 1,
        callStatus: 1,
        status: 1,
        unreadCount: 1,
        timestamp: 1,
        otherUser: {
          _id: "$otherUser._id",
          name: "$otherUser.name",
          profileImage: "$otherUser.profileImage",

          
        }
      }
    },
    { $sort: { timestamp: -1 } }
  ]);
};
