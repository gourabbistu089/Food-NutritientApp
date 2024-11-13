// server/routes/ingredientRoutes.js
import express from 'express';
import {upload} from '../middleware/multer.middleware.js'; // Import Multer
import { createIngredient } from '../controllers/ingredientController.js';

import { getAllIngredients, getIngredientById } from '../controllers/ingredientController.js';
const router = express.Router();

router.post('/', upload.single('image'), createIngredient); // Use Multer to handle image uploads
router.get('/', getAllIngredients);            // Route to get all ingredients
router.get('/:id', getIngredientById);         // Route to get a specific ingredient by ID


export default router;
