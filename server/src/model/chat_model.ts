import mongoose from 'mongoose'

const Chat_model = new mongoose.Schema({
  sender_id: {
    type: String,
    required: true,
  },
  receiver_id: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    requried: true,
  },
})

export default mongoose.model('connect-dev-chat', Chat_model)
