import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  rating: {
    value: Number,
    totalReviews: Number,
  },
  category: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: true,
  },
  closingTime: {
    type: String,
  },
  address: {
    street: String,
    city: String,
    pincode: String,
    state: String,
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
//   shopLocation: {
//     type: String,
//   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
