import React, { useState, useEffect } from 'react';
import img1 from  '../assets/fruit1.jpg'
import img2 from  '../assets/fruit2.jpeg'
import img3 from  '../assets/fruit3.jpeg'
const staticImages = [
    img1,
    img2,
    img3
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Assuming no loading is needed for static images

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % staticImages.length);
    }, 3000); // Change image every 3.5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? staticImages.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % staticImages.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-8 mb-8">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {staticImages.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? 'block' : 'hidden'
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        ))}

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {staticImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToPrevious}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
            <span className="text-white">❮</span>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
            <span className="text-white">❯</span>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
