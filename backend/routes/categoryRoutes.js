import express from 'express';
import { 
  getMainCategories, 
  getSubCategories, 
  createMainCategory,
  createSubCategory,
  bulkCreateMainCategories,
  getSubCategoriesByMain,
  bulkCreateSubCategories,
  getSubCategoriesById,
  // Add this new controller
  searchSubCategories
} from '../controllers/categoryController.js';

const router = express.Router();

// GET routes
router.get('/main', getMainCategories);
router.get('/sub/:mainId', getSubCategoriesByMain);
router.get('/subone/:subId', getSubCategoriesById); 
router.get('/sub', getSubCategories);
// Add new search endpoint
router.get('/search', searchSubCategories);

// POST routes
router.post('/main', createMainCategory);
router.post('/sub', createSubCategory);
router.post('/main/bulk', bulkCreateMainCategories);
router.post('/sub/bulk', bulkCreateSubCategories);

export default router;