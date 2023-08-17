import mongoose from 'mongoose';

const Company_Project_model = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  description: {
    type: String,
    required: [true, 'description is required'],
  },
  skills_required: {
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
    type: Number,
    required: [true, 'Price is required'],
  },
  difficulty: {
    type: String,
    enum: ['low', 'medium', 'high'],
  },
});

export default mongoose.model('connect_dev_company', Company_Project_model);
