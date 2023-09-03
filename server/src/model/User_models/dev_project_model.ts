import mongoose from 'mongoose'

const Dev_Project_model = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  description: {
    type: String,
    required: [true, 'description is required'],
  },
  date: {
    type: String,
  },
  photo: {
    type: String,
    required: [true, 'photo is reuqired'],
  },
  github: {
    type: String,
  },
  liveLink: {
    type: String,
  },
  videoLink: {
    type: String,
  },
  skills_used: [],
})

export default mongoose.model('connect_dev_user_projects', Dev_Project_model)
