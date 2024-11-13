// server/routes/nutritionRoutes.js
import express from 'express';
import { searchRecipesByNutrients } from '../controllers/nutritionController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/recipes/nutrients', authMiddleware, searchRecipesByNutrients);

export default router;
