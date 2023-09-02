import mongoose from 'mongoose'

const Company_Project_model = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  country: {
    type: String,
  },
  urgent: {
    type: Boolean,
  },
  price: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
  },

  DeliveryTime: {
    type: String,
  },
  StartDate: {
    type: String,
  },
  Revisions: {
    type: String,
  },
  DesignCustomization: {
    type: Boolean,
    default: false,
  },
  ContentUpload: {
    type: Boolean,
    default: false,
  },
  Responsive: {
    type: Boolean,
    default: false,
  },
  isFinnished: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.model('connect_dev_company', Company_Project_model)
