import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const ShimmerCard = () => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 dark:bg-gray-800 dark:border-gray-700 animate-pulse">
      <div className="relative">
        {/* Shimmer effect for the image */}
        <div className="w-full h-64 bg-gray-600 dark:bg-gray-700 animate-pulse"></div>
      </div>
      <div className="p-6 dark:text-gray-300">
        {/* Shimmer effect for title */}
        <div className="h-6 bg-gray-300 dark:bg-gray-700 mb-2 rounded w-3/4 animate-pulse"></div>
        {/* Shimmer effect for excerpt */}
        <div className="h-4 bg-gray-300 dark:bg-gray-700 mb-4 rounded w-5/6 animate-pulse"></div>
        <div className="flex items-center justify-between p-4">
          {/* Shimmer effect for button */}
          <div className="h-8 bg-blue-400 dark:bg-blue-600 animate-pulse rounded-lg w-28"></div>
          {/* Shimmer effect for date */}
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
const BlogPage = () => {
  const {loading, error, data} = useFetch('https://food-nutritientapp.onrender.com/api/blog');
  const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    if(data) {
      setBlogPost(data.data);
    }
  }, [data]);
  

  return (
    <div className="mx-auto max-w-screen-xl">
      <h2 className="text-4xl font-bold mb-6 mt-8 text-center text-primary dark:text-white">Blogs and Articles</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 15 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-red-500 dark:text-yellow-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPost.map(post => (
            <div key={post._id} className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 p-4 dark:bg-gray-800 dark:border-gray-700">
              <div className="relative shadow-xl">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-90"
                />
              </div>
              <div className="p-6 dark:text-gray-300">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <Link to={post._id} className="flex items-center text-primary dark:text-white hover:bg-primary hover:text-white w-fit p-2 rounded-md transition-all duration-200">
                View More <IoIosArrowForward className="ml-1" />
              </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;

