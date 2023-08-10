import mongoose from 'mongoose'

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
})

export default mongoose.model('connect-dev-user-rating', Rating_model)
