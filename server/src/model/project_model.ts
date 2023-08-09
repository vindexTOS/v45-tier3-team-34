import mongoose from 'mongoose'

const Project_model = new mongoose.Schema({
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
  skills_used: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      title: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    },
  ],
})

export default mongoose.model('connect_dev_user_projects', Project_model)
