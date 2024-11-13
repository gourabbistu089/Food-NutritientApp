import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch, FaInfoCircle, FaCheckCircle, FaAppleAlt } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const NutritionInfo = () => {
  const [foodQuery, setFoodQuery] = useState('');
  const [nutritionData, setNutritionData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState(null);

  // API key for calorieninjas
  const apiKey = 'RzPBYmFpt6LLAgSNrlcpaQ==kUG4ccg5s4EXkgZY'; 

  const fetchNutritionInfo = async () => {
    setError(null);
    setLoading(true);

    try {
      // Fetch nutrition data
      const nutritionResponse = await axios.get(
        `https://api.calorieninjas.com/v1/nutrition?query=${foodQuery}`,
        { headers: { 'X-Api-Key': apiKey } }
      );

      if (nutritionResponse.data.items && nutritionResponse.data.items.length > 0) {
        setNutritionData(nutritionResponse.data.items);

        // Fetch image for the food item
        const imageResponse = await axios.get(
          `https://api.pexels.com/v1/search?query=${foodQuery}&per_page=1`,
          { headers: { Authorization: 'W6reSGzSammZHhLXTd526fXkB0dPiMQ1GMCGR7uwUBHfqb0txtrmkHcs' } }
        );
        const image = imageResponse.data.photos[0]?.src.medium;
        setImageData(image);
      } else {
        setError('No nutrition data found for the given query.');
        setImageData(null);
      }
    } catch (err) {
      setError('Error fetching nutrition data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-auto flex flex-col items-center w-4/5 mx-auto dark:bg-gray-800 dark:text-white">
      {/* Header */}
      <header className="w-full p-4">
        <h1 className="text-center text-2xl sm:text-5xl font-bold flex items-center justify-center gap-2">
          <FaAppleAlt /> Nutrition Finder
        </h1>
      </header>

      <div className="flex flex-col items-center justify-center w-full sm:p-6 mt-6">
        <div className="bg-white dark:bg-slate-900 shadow-lg rounded-lg sm:p-6 w-full max-w-3xl">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl  font-semibold text-center mb-4 text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <FaInfoCircle /> Search for Nutrition Info
          </h2>

          {/* Search Bar */}
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              value={foodQuery}
              onChange={(e) => setFoodQuery(e.target.value)}
              placeholder="Enter food items (e.g., '3lb carrots or a chicken sandwich')"
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <button
              onClick={fetchNutritionInfo}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 flex items-center gap-1"
            >
              <FaSearch size={25} />
            </button>
          </div>

          {/* Loading Spinner */}
          {loading && (
            <div className="flex justify-center my-4">
              <AiOutlineLoading3Quarters className="animate-spin text-blue-500 text-3xl" />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 p-2 rounded-lg text-center mb-4">
              {error}
            </div>
          )}

          {/* Nutrition Data */}
          {nutritionData.length > 0 && !loading && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-4 shadow-inner flex gap-4">
              {/* Image Section */}
              {imageData && (
                <img
                  src={imageData}
                  alt={foodQuery}
                  className="w-1/3 rounded-lg shadow-lg object-cover"
                />
              )}

              {/* Nutrition Info Section */}
              <div className="w-full">
                {nutritionData.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-600 py-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" /> {item.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <p><strong>Calories:</strong> {item.calories} kcal</p>
                      <p><strong>Serving Size:</strong> {item.serving_size_g} g</p>
                      <p><strong>Fat:</strong> {item.fat_total_g} g</p>
                      <p><strong>Saturated Fat:</strong> {item.fat_saturated_g} g</p>
                      <p><strong>Protein:</strong> {item.protein_g} g</p>
                      <p><strong>Sodium:</strong> {item.sodium_mg} mg</p>
                      <p><strong>Potassium:</strong> {item.potassium_mg} mg</p>
                      <p><strong>Cholesterol:</strong> {item.cholesterol_mg} mg</p>
                      <p><strong>Carbs:</strong> {item.carbohydrates_total_g} g</p>
                      <p><strong>Fiber:</strong> {item.fiber_g} g</p>
                      <p><strong>Sugar:</strong> {item.sugar_g} g</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NutritionInfo;
