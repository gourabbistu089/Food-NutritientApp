import React, { useState } from 'react';

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "What is the purpose of this food nutrient app?",
            answer: "This app helps users track the nutritional information of different foods, allowing them to make informed dietary choices based on their goals.",
        },
        {
            question: "How can I search for specific foods?",
            answer: "Use the search bar at the top of the screen to find foods. You can filter by nutrients, calories, and more.",
        },
        {
            question: "Can I create a custom meal plan?",
            answer: "Yes! Our app allows you to create and save personalized meal plans based on your dietary preferences and goals.",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto p-8">
            <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Frequently Asked Questions</h2>
            <div className="space-y-6">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg shadow-md transition-all duration-300"
                    >
                        <button
                            className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-[#6439FF] to-[#A594F9]  dark:bg-gradient-to-r dark:from-[#1F316F] dark:to-[#16325B] bg-opacity-80 text-white text-left rounded-t-lg focus:outline-none transition-colors duration-300"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="font-semibold text-lg">{item.question}</span>
                            <svg
                                className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                        {activeIndex === index && (
                            <div className="p-6 dark:bg-gray-800 dark:text-slate-200 bg-gray-50 text-gray-700 rounded-b-lg border-t border-gray-200 transition-opacity duration-300 ease-in-out">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
