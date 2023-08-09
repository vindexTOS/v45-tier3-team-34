import mongoose from 'mongoose'

const Project_model = new mongoose.Schema({
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
})
