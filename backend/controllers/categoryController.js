import MainCategory from '../models/MainCategory.js';
import SubCategory from '../models/SubCategory.js';

export const getMainCategories = async (req, res) => {
  const categories = await MainCategory.find();
  res.json(categories);
};

export const getSubCategories = async (req, res) => {
 
  const subcategories = await SubCategory.find();
  res.json(subcategories);
};

export const getSubCategoriesByMain = async (req, res) => {
  const { mainId } = req.params;
  const subcategories = await SubCategory.find({ mainCategory: mainId });
  res.json(subcategories);
};

export const getSubCategoriesById = async (req, res) => {
  const { subId } = req.params;
  
  try {
    const subcategory = await SubCategory.findById(subId);
    console.log("Subcategory:", subcategory); // Debugging line
    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }

    res.json(subcategory);
  } catch (error) {
    console.error("Error fetching subcategory:", error);
    res.status(500).json({ message: "Server error" });
  }
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
export const bulkCreateMainCategories = async (req, res) => {
    try {
      const categories = req.body;
      
      if (!Array.isArray(categories)) {
        return res.status(400).json({ message: "Request body must be an array" });
      }
      
      const savedCategories = await MainCategory.insertMany(categories);
      res.status(201).json({
        message: `Successfully created ${savedCategories.length} main categories`,
        data: savedCategories
      });
    } catch (error) {
      res.status(400).json({ 
        message: "Failed to create bulk main categories", 
        error: error.message 
      });
    }
  };
  
  // Bulk create subcategories
  export const bulkCreateSubCategories = async (req, res) => {
    try {
      const subcategories = req.body;
      
      if (!Array.isArray(subcategories)) {
        return res.status(400).json({ message: "Request body must be an array" });
      }
      
      // Validate all main category IDs exist
      const mainCategoryIds = [...new Set(subcategories.map(sub => sub.mainCategory))];
      const existingCategories = await MainCategory.find({
        _id: { $in: mainCategoryIds }
      });
      
      if (existingCategories.length !== mainCategoryIds.length) {
        return res.status(400).json({ 
          message: "One or more main category IDs don't exist" 
        });
      }
      
      const savedSubcategories = await SubCategory.insertMany(subcategories);
      res.status(201).json({
        message: `Successfully created ${savedSubcategories.length} subcategories`,
        data: savedSubcategories
      });
    } catch (error) {
      res.status(400).json({ 
        message: "Failed to create bulk subcategories", 
        error: error.message 
      });
    }
  };

// Add this controller function
export const searchSubCategories = async (req, res) => {
  try {
    const query = req.query.q;
    
    if (!query || query.trim().length < 2) {
      return res.status(400).json({ message: "Search query must be at least 2 characters" });
    }
    
    // Search for subcategories with names containing the query string
    const subcategories = await SubCategory.find({ 
      name: { $regex: query, $options: 'i' } 
    })
    .limit(8) // Limit to 8 results
    .populate('mainCategory', 'name'); // Include main category name
    
    res.json(subcategories);
  } catch (error) {
    console.error("Error searching subcategories:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};