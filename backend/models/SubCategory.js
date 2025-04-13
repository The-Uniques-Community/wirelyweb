import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  mainCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'MainCategory' },
  description: String,
  image: String,

  isVerified: {
    type: Boolean,
    default: false,
  },
  rating: {
    value: Number,
    totalReviews: Number,
  },
  contact: {
    phone: String,
    email: String,
    whatsappAvailable: {
      type: Boolean,
      default: false,
    },
  },
  businessHours: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String,
  },
  aboutBusiness: {
    type: String,
  },
  serviceDetails: {
    whatsIncluded: [String],
    whatYouNeed: [
      {
        title: String,
        note: String,
      },
    ],
  },
  
});

export default mongoose.model('SubCategory', subCategorySchema);
