import MainCategory from '../models/MainCategory.js';
import SubCategory from '../models/SubCategory.js';

export const getMainCategories = async (req, res) => {
  const categories = await MainCategory.find();
  res.json(categories);
};

export const getSubCategories = async (req, res) => {
  const { mainId } = req.params;
  const subcategories = await SubCategory.find({ mainCategory: mainId });
  res.json(subcategories);
};

// Add new main category
export const createMainCategory = async (req, res) => {
  try {
    const { name, description, icon } = req.body;
    
    const newCategory = new MainCategory({
      name,
      description,
      icon
    });
    
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add new subcategory
export const createSubCategory = async (req, res) => {
  try {
    const { name, description, mainCategory } = req.body;
    
    // Check if main category exists
    const mainCategoryExists = await MainCategory.findById(mainCategory);
    if (!mainCategoryExists) {
      return res.status(404).json({ message: "Main category not found" });
    }
    
    const newSubCategory = new SubCategory({
      name,
      description,
      mainCategory
    });
    
    const savedSubCategory = await newSubCategory.save();
    res.status(201).json(savedSubCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};