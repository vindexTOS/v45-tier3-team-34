import mongoose from 'mongoose'
import user_model from './User_models/user_model'
const Rating_model = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  rater_id: {
    type: String,
    required: true,
  },
  rating_score: {
    type: Number,
    default: 0,
  },
  rating_review: {
    type: String,
  },
  user: {
    userName: {
      type: String,
      required: [true, 'user name is requried'],
    },
    email: {
      type: String,
      required: [true, 'email is requried'],
    },

    avatar: {
      type: String,
      default: `https://img.freepik.com/free-icon/man_318-677829.jpg?w=360`,
    },

    role: {
      type: String,

      default: 'Developer',
    },
  },
})

export default mongoose.model('connect-dev-user-rating', Rating_model)
