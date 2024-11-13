import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Eating Whole Foods",
    excerpt: "Discover why whole foods are crucial for a healthy diet.",
    imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    link: "/blog/benefits-of-whole-foods"
  },
  {
    id: 2,
    title: "5 Quick and Healthy Breakfast Ideas",
    excerpt: "Start your day right with these nutritious breakfast options.",
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    link: "/blog/healthy-breakfast-ideas"
  },
  {
    id: 3,
    title: "Understanding Nutritional Labels",
    excerpt: "Learn how to read and interpret nutritional labels effectively.",
    imageUrl: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=",
    link: "/blog/nutritional-labels"
  },
  {
    id: 4,
    title: "The Importance of Salads in Your Diet",
    excerpt: "Explore how incorporating salads into your daily meals can boost overall health.",
    imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/blog/nutritional-labels"
  },
];

const BlogSection = () => {
  return (
    <div className="my-12 mx-auto max-w-screen-xl mt-10">
      <h2 className="text-4xl font-bold mb-10 text-center ">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300">
            <div className="relative">
              <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover transition-all duration-300 hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link to={'/blog'} className="flex items-center text-primary hover:bg-primary hover:text-white w-fit p-2 rounded-md transition-all duration-200">
                View More <IoIosArrowForward className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
