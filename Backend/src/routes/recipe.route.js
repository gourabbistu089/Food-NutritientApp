// server/routes/recipeRoutes.js
import express from 'express';
import {createRecipe, getAllRecipes, getRecipeInformation } from '../controllers/recipe.controler.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { upload } from '../middleware/multer.middleware.js';

const router = express.Router();

router.post('/', upload.single('image'), createRecipe);
router.get('/',  getAllRecipes);
router.get('/:id',  getRecipeInformation);


export default router;
