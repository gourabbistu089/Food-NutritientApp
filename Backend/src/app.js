import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js';
import recipeRoutes from './routes/recipe.route.js';
import ingredientRoutes from './routes/ingredientRoutes.js';
import blogRoutes from './routes/blog.route.js';
import nutritionRoutes from './routes/nutritionRoutes.js';
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

// middlewares
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({limit:"16kb", extended: true}));
app.use(express.static("public"))
app.use(cookieParser());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/nutrition', nutritionRoutes);
app.use('/api/blog',blogRoutes );


export {app};