import axios from 'axios';

export const searchRecipesByNutrients = async (req, res) => {
    try {
        const { minProtein, maxFat, maxCarbs } = req.query;
        const response = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients`, {
            params: { minProtein, maxFat, maxCarbs, apiKey: process.env.SPOONACULAR_API_KEY }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

