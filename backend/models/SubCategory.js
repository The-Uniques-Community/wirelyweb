import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  mainCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'MainCategory' },
  description: String,
  image: String
});

export default mongoose.model('SubCategory', subCategorySchema);
