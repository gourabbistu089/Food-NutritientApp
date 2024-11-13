import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { AiOutlineClose } from 'react-icons/ai';

const ShimmerCard = () => (
  <div className="border rounded-lg overflow-hidden shadow-lg dark:bg-gray-800 dark:border-gray-700 animate-pulse">
    <div className="bg-gray-300 h-48 w-full dark:bg-gray-700" />
    <div className="p-4 dark:text-gray-300">
      <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded dark:bg-gray-700"></div>
      <div className="bg-gray-300 h-8 w-1/2 rounded dark:bg-gray-700"></div>
    </div>
  </div>
);

const RecipePage = () => {
  const { data, loading, error } = useFetch(`/api/recipes`);
  const [recipesData, setRecipesData] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  useEffect(() => {
    if (data) {
      setRecipesData(data.data); // Adjust according to actual data structure
    }
  }, [data]);

  const handleOpenModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="mt-2 mx-auto max-w-screen-xl  dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-10 text-center text-primary dark:text-white">Recipes </h2>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {Array.from({ length: 15 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-red-500 dark:text-yellow-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {recipesData.slice(0, 15).map((recipe) => (
            <div key={recipe.id} className="border rounded-lg overflow-hidden shadow-lg dark:bg-gray-800 dark:border-gray-700 p-4">
              <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
              <div className="p-4 dark:text-gray-300">
                <h4 className="text-xl font-semibold mb-2">{recipe.name}</h4>
                <button
                  onClick={() => handleOpenModal(recipe)}
                  className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                >
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedRecipe && (
        <div className="fixed inset-0 top-12 bg-black bg-opacity-70 flex items-center justify-center z-20">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6  relative dark:bg-gray-800 dark:text-white">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-white dark:hover:text-gray-300"
            >
              <AiOutlineClose size={24} />
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-center">{selectedRecipe.name}</h3>
            <div className="flex items-center gap-4 mb-4 dark:text-gray-300">
              <img src={selectedRecipe.image} alt={selectedRecipe.name} className="w-32 h-32 rounded-lg object-cover" />
              <div className="text-sm">
                <p><strong>Calories:</strong> {selectedRecipe.calories}</p>
                <p><strong>Protein:</strong> {selectedRecipe.protein}</p>
              </div>
            </div>

            <h4 className="text-xl font-semibold mb-2">Ingredients:</h4>
            <ul className="list-disc list-inside mb-4 pl-4 space-y-1 dark:text-gray-300">
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h4 className="text-xl font-semibold mb-2">Steps:</h4>
            <ol className="list-decimal list-inside pl-4 space-y-1 dark:text-gray-300">
              {selectedRecipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <div className="text-center mt-6">
              <button
                onClick={handleCloseModal}
                className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition duration-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipePage;

