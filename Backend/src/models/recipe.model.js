import mongoose from 'mongoose';

// Define the schema for the Recipe model
const recipeSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String], // Array of strings
    required: true,
  },
  steps: {
    type: [String], // Array of strings
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  protein: {
    type: String,
    required: true,
  },
  vitamins: {
    type: [String], // Array of strings
    required: true,
  },
  minerals: {
    type: [String], // Array of strings
    required: true,
  },
  fat: {
    type: String,
    required: true,
  },
  carbohydrates: {
    type: String,
    required: true,
  },
});

// Create and export the Recipe model based on the schema
const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
