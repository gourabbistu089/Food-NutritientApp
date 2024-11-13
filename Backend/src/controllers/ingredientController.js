// server/controllers/ingredientController.js
import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import Ingredient from '../models/Ingredient.js';
import { uploadOnCloudinary, deleteOnCloudinary } from '../utils/cloudinary.js';

export const createIngredient = asyncHandler(async (req, res) => {
    const { name, calories, protein, fat, carbohydrates, vitamins, minerals } = req.body;

    // Validate input fields
    if (!name || !calories || !protein || !fat || !carbohydrates) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Handle image upload
    const imageLocalPath = req.file?.path; // Use Multer to get the uploaded file

    if (!imageLocalPath) {
        return res.status(400).json({ message: 'Image file is missing' });
    }

    try {
        // Upload image to Cloudinary
        const image = await uploadOnCloudinary(imageLocalPath);

        // Create the new ingredient
        const newIngredient = await Ingredient.create({
            name,
            calories,
            protein,
            fat,
            carbohydrates,
            vitamins: vitamins ? vitamins.split(',') : [],
            minerals: minerals ? minerals.split(',') : [],
            image: image.url,
        });

        return res.status(201).json(newIngredient);
    } catch (error) {
        console.error('Ingredient creation failed:', error);
        
        // Delete the uploaded image if creation fails
        if (image?.public_id) await deleteOnCloudinary(image.public_id);
        
        return res.status(500).json({ message: 'Failed to create ingredient' });
    }
});
// Get all ingredients
export const getAllIngredients = asyncHandler(async (req, res) => {
    const ingredients = await Ingredient.find({});
    return res.status(200).json(new ApiResponse(200, ingredients, "Ingredients retrieved successfully"));
  });
  
  // Get a specific ingredient by ID
  export const getIngredientById = asyncHandler(async (req, res) => {
    const ingredient = await Ingredient.findById(req.params.id);
    
    if (!ingredient) {
      throw new ApiError(404, "Ingredient not found");
    }
    
    return res.status(200).json(new ApiResponse(200, ingredient, "Ingredient retrieved successfully"));
  });