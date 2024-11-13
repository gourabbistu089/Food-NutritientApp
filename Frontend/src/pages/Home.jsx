import React from 'react';
import FoodCarousel from '../components/FoodCarousel';
import BlogSection from '../components/BlogSection.jsx';
import UserTestimonials from '../components/UserTestimonials.jsx';
import HeaderSection from '../components/HeaderSection.jsx';
import CalorieCounter from '../components/CaloryCouter.jsx';
import SubscriptionModal from '../components/SubscriptionModal.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';

const Home = () => {
  return (
    <div className="p-4 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 ">
     <HeaderSection />
      <FoodCarousel />
      <BlogSection />
      <CalorieCounter />
      <SubscriptionModal />
      <UserTestimonials />
      <FAQAccordion />
    </div>
  );
};

export default Home;
