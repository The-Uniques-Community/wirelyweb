import express from 'express';
import { 
  getMainCategories, 
  getSubCategories, 
  createMainCategory,
  createSubCategory 
} from '../controllers/categoryController.js';

const router = express.Router();

// GET routes
router.get('/main', getMainCategories);
router.get('/sub/:mainId', getSubCategories);

// POST routes
router.post('/main', createMainCategory);
router.post('/sub', createSubCategory);

export default router;