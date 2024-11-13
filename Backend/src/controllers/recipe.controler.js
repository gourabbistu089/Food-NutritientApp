// router.post('/recipe', authMiddleware, createRecipe);
// router.get('/recepes', authMiddleware, getAllRecipes);
// router.get('/recipe/:id', authMiddleware, getRecipeInformation);

import Recipe from "../models/recipe.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary, deleteOnCloudinary } from "../utils/cloudinary.js";

export const createRecipe = asyncHandler(async (req, res) => {
  const { name, ingredients, steps, calories, protein, fat, carbohydrates, vitamins, minerals } =
    req.body;


  // Validate input fields
  if (
    !name ||
    !ingredients ||
    !steps ||
    !calories ||
    !protein ||
    !fat ||
    !carbohydrates
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }


  // Handle image upload
  const imageLocalPath = req.file?.path; // Use Multer to get the uploaded file

  if (!imageLocalPath) {
    return res.status(400).json({ message: "Image file is missing" });
  }
  // Upload image to Cloudinary
  try {
    const image = await uploadOnCloudinary(imageLocalPath);

    // Create the new recipe
    const newRecipe = await Recipe.create({
      name,
      steps: steps ? steps.split(",") : [],
      calories,
      protein,
      fat,
      carbohydrates,
      image: image.url,
      vitamins: vitamins ? vitamins.split(",") : [],
      minerals: minerals ? minerals.split(",") : [],
      ingredients: ingredients ? ingredients.split(",") : [],
    });

    return res
      .status(201)
      .json(new ApiResponse(201, newRecipe, "Recipe created successfully"));
  } catch (error) {
    console.error(error);

    // Delete the uploaded image if recipe creation fails
    if (image?.public_id) {
      await deleteOnCloudinary(image.public_id);
    }
  }
});

export const getAllRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find({});
  return res.status(200).json(new ApiResponse(200, recipes, "Recipes retrieved successfully"));
});

export const getRecipeInformation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findById(id);
  return res.status(200).json(new ApiResponse(200, recipe, "Recipe retrieved successfully"));
})