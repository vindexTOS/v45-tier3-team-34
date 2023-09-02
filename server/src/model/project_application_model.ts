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
  descriptio: {
    type: String,
  },
  bide: {
    type: Number,
  },
})

export default mongoose.model(
  'connect_dev_user_application',
  ProjectApplicationModel,
)
