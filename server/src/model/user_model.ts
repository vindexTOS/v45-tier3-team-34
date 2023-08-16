import mongoose from 'mongoose'

const User_model = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'user name is requried'],
  },
  email: {
    type: String,
    required: [true, 'email is requried'],
  },

  password: {
    type: String,
    required: [true, 'password is required'],
  },

  avatar: {
    type: String,
    default: `https://img.freepik.com/free-icon/man_318-677829.jpg?w=360`,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  role: {
    type: String,
    enum: ['Developer', 'Company/Startup', 'HR'],
    default: 'Developer',
  },
  skill_id: {
    type: String,
  },
  projects_id: {
    type: String,
  },
  task_id: {
    type: String,
  },
  review_id: {
    type: String,
  },
})

export default mongoose.model('connect-dev-user', User_model)
