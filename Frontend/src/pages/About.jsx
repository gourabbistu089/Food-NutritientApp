import React from 'react';
import { FaAppleAlt, FaHeartbeat, FaLeaf, FaRegSmile } from 'react-icons/fa';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 bg-gray-50 dark:bg-gray-900 -mt-6">
      {/* About Us Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:w-4/5 w-full p-8 rounded-lg mb-10 dark:bg-gray-800">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="text-4xl font-bold text-sky-700 dark:text-sky-600 mb-4">About Us</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Welcome to our Food Nutrition App! <br /> Our mission is to empower you to make informed dietary choices and lead a healthier life. <br />
            With our app, you can track your nutrition, discover healthy recipes, and get personalized insights tailored to your health goals.
            <br /> We believe in the power of good nutrition to transform lives, and we are here to guide you every step of the way.
          </p>
        </div>
        
        {/* Image with Border */}
        <div className="lg:w-1/2 w-full flex justify-center relative">
          <img
            src="https://i.ibb.co/vQbkKj7/about.jpg"
            alt="About Us"
            className="rounded-lg w-[60%] h-auto relative "
          />
        </div>
      </div>

      {/* Our Goals Section */}
      <div className="w-full lg:w-4/5 p-8 rounded-lg dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-500 text-center mb-6">Our Goals</h2>
        <div className="flex flex-wrap justify-around gap-6 lg:gap-8">
          {/* Goal Items */}
          <div className="flex flex-col items-center w-1/2 lg:w-1/5 text-center p-2">
            <FaAppleAlt className="text-green-500 dark:text-green-400 text-5xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Promote Healthy Eating</h3>
          </div>
          <div className="flex flex-col items-center w-1/2 lg:w-1/5 text-center p-2">
            <FaHeartbeat className="text-red-500 dark:text-red-400 text-5xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Improve Wellness</h3>
          </div>
          <div className="flex flex-col items-center w-1/2 lg:w-1/5 text-center p-2">
            <FaLeaf className="text-green-600 dark:text-green-500 text-5xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Encourage Sustainability</h3>
          </div>
          <div className="flex flex-col items-center w-1/2 lg:w-1/5 text-center p-2">
            <FaRegSmile className="text-yellow-500 dark:text-yellow-400 text-5xl mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Enhance Quality of Life</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

