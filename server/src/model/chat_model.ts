import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  userNotification: {
    notification: {
      type: Boolean,
      default: false,
    },
    receiverId: {
      type: String,
    },
  },
  messages: [
    {
      sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      isRead: {
        type: Boolean,
        default: false,
      },
      content: String,
      timestamp: Date,
    },
  ],
})

export default mongoose.model('connect-dev-chat', chatSchema)
