const { default: mongoose } = require('mongoose');
const Message = require('../model/message.model');


exports.sendMessage = async ({senderId, receiverId, text}) => {
    const conversationId = [senderId, receiverId].sort().join('_');
    const message = new Message({senderId, receiverId, text, conversationId,});
    return await message.save();
}

exports.getChatMessages = async (userId) => {
    return await Message.find({
        $or: [{ senderId: userId }, { receiverId: userId }]
    }).sort({ createdAt: 1 });
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
        lastMessage: { $first: "$text" },
        lastSenderId: { $first: "$senderId" },
        lastReceiverId: { $first: "$receiverId" },
        timestamp: { $first: "$createdAt" }
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
        conversationId: "$_id",
        lastMessage: 1,
        timestamp: 1,
        otherUser: {
          _id: "$otherUser._id",
          name: "$otherUser.name",
          avatarUrl: "$otherUser.avatarUrl"
        }
      }
    },
    { $sort: { timestamp: -1 } }
  ]);
};
