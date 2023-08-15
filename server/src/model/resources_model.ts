import mongoose from 'mongoose'

const Resources_model = new mongoose.Schema({
  link: {
    type: String,
    requried: true,
  },
  title: {
    type: String,
    requried: true,
  },
  description: {
    type: String,
    requried: true,
  },
  img: {
    type: String,
    requried: true,
  },
})

export default mongoose.model('connect-dev-resources', Resources_model)
