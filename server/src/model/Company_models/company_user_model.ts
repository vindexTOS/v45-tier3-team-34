import mongoose from 'mongoose'

const Company_user_model = new mongoose.Schema({
  companyName: {
    type: String,
    default: '',
  },

  summary: {
    type: String,
    default: '',
  },
  company_id: {
    type: String,
    require: true,
  },

  linkedin: {
    type: String,
    default: '',
  },
  website: {
    type: String,
    default: '',
  },
  hrPay: {
    type: {
      type: String,
      default: 5,
    },
  },
  userTimeZone: {
    type: String,
    default: Intl.DateTimeFormat().resolvedOptions().timeZone,
  },
})

export default mongoose.model('connect-dev-company-user', Company_user_model)
