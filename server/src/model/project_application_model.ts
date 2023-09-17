import mongoose from 'mongoose'

const ProjectApplicationModel = new mongoose.Schema({
  company_id: {
    type: String,
  },
  dev_id: {
    type: String,
  },
  project_id: {
    type: String,
  },
  description: {
    type: String,
  },
  bide: {
    type: Number,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  projectFinnishSubmit: {
    type: Boolean,
    default: false,
  },
  projectFinnished: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.model(
  'connect_dev_user_application',
  ProjectApplicationModel,
)
