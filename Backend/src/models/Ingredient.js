// server/models/Ingredient.js
import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    fat: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    vitamins: [{ type: String }],
    minerals: [{ type: String }],
    image: { type: String }, // URL for the image uploaded to Cloudinary
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
export default Ingredient;
