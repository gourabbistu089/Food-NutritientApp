import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useFetch } from '../hooks/useFetch';

const ShimmerCard = () => (
  <div className="border rounded-lg overflow-hidden shadow-lg animate-pulse">
    <div className="bg-gray-300 h-48 w-full" />
    <div className="p-4">
      <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded"></div>
      <div className="bg-gray-300 h-8 w-1/2 rounded"></div>
    </div>
  </div>
);

const IngredientsPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const {data, loading, error} = useFetch('/api/ingredients');

  useEffect(() => {
    if (data) {
      setIngredients(data?.data);
    }
  }, [data]);

  const handleOpenModal = (ingredient) => {
    setSelectedIngredient(ingredient);
  };

  const handleCloseModal = () => {
    setSelectedIngredient(null);
  };

  return (
    <div className="mt-4 mx-auto max-w-screen-xl dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-10 text-center text-primary">Ingredients</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {Array.from({ length: 15 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>  
      ) :  (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ingredients.map(ingredient => (
          <div key={ingredient._id} className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 dark:bg-gray-800  p-4">
            <img src={ingredient.image} alt={ingredient.name} className="w-full h-56 object-cover transition-opacity duration-300 hover:opacity-90" />
            <div className="p-6 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-2">{ingredient.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Calories: {ingredient.calories}</p>
              <button 
                onClick={() => handleOpenModal(ingredient)} 
                className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>
      )
    }
     

      {selectedIngredient && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg w-4/5 h-auto max-w-lg mx-4 p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">{selectedIngredient.name}</h3>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-800 transition dark:text-gray-400 dark:hover:text-gray-200">
                <MdClose size={24} />
              </button>
            </div>
            <img src={selectedIngredient.image} alt={selectedIngredient.name} className="w-full h-48 object-cover my-4" />
            <p className="text-gray-700 dark:text-gray-300 mb-2">Calories: {selectedIngredient.calories}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Protein: {selectedIngredient.protein}g</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Fat: {selectedIngredient.fat}g</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Carbohydrates: {selectedIngredient.carbohydrates}g</p>
            <div className="mb-2">
              <strong>Vitamins:</strong>
              <ul className="list-disc list-inside">
                {selectedIngredient.vitamins.map((vitamin, index) => (
                  <li key={index}>{vitamin}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Minerals:</strong>
              <ul className="list-disc list-inside">
                {selectedIngredient.minerals.map((mineral, index) => (
                  <li key={index}>{mineral}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IngredientsPage;

