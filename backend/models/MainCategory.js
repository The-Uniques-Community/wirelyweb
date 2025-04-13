import mongoose from 'mongoose';

const mainCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String },
});

export default mongoose.model('MainCategory', mainCategorySchema);
