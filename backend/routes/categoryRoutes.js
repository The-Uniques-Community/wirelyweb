import express from 'express';
import { 
  getMainCategories, 
  getSubCategories, 
  createMainCategory,
  createSubCategory ,
  bulkCreateMainCategories,
  bulkCreateSubCategories,
  getSubCategoriesById
} from '../controllers/categoryController.js';

const router = express.Router();

// GET routes
router.get('/main', getMainCategories);
router.get('/sub/:mainId', getSubCategories);
router.get('/subone/:subId', getSubCategoriesById); // For all subcategories

// POST routes
router.post('/main', createMainCategory);
router.post('/sub', createSubCategory);
// In categoryRoutes.js
router.post('/main/bulk', bulkCreateMainCategories);
router.post('/sub/bulk', bulkCreateSubCategories);

export default router;