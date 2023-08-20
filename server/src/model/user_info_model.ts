import mongoose from 'mongoose'

const user_info_model = new mongoose.Schema({
  summary: {
    type: String,
    default: '',
  },
  user_id: {
    type: String,
    require: true,
  },
  github: {
    type: String,
    default: '',
  },
  linkedin: {
    type: String,
    default: '',
  },
  website: {
    type: String,
    default: '',
  },
  skills: [],
})

export default mongoose.model('connect-dev-user-info', user_info_model)
