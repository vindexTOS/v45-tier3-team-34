import mongoose from 'mongoose'

const SkillSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})

const SkillsSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  skills: [SkillSchema],
})

export default mongoose.model('connect_dev_user_skills', SkillsSchema)
