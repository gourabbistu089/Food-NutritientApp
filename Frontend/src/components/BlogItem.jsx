import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function BlogItem() {
  const { id } = useParams();
  const { loading, error, data } = useFetch("/api/blog/" + id);
  const [blogData, setBlogData] = useState(null);
  useEffect(() => {
    if (data) {
      setBlogData(data.data);
    }
  });

  if (loading) {
    return shimmerEffect;
  }

  return (
    <div className="relative mx-auto max-w-screen-xl dark:bg-gray-900 dark:text-white">
      <div className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 p-10 flex flex-col md:flex-row gap-10 dark:bg-gray-800">
        <img
          src={blogData?.imageUrl}
          alt={blogData?.title}
          className="w-full h-auto md:w-[330px] md:h-[428px] transition-opacity duration-300 hover:opacity-90"
        />

        <div className="p-6 flex-1">
          <h3 className="text-3xl font-semibold mb-4">{blogData?.title}</h3>
          <p className="text-gray-800 mb-4 text-xl font-semibold dark:text-gray-300">
            {blogData?.excerpt}
          </p>
          <p className="text-gray-600 mb-4 text-md dark:text-gray-400">
            {blogData?.content}
          </p>

          <p className="text-gray-900 font-semibold mb-4 text-lg dark:text-gray-200">
            Author: {blogData?.author || "Unknown Sources"}
          </p>

          <div className="relative p-3 mt-24">
            <div className="absolute right-0 bottom-0">
              <p>
                <span className="ml-4 text-gray-900 font-semibold dark:text-gray-200">
                  {new Date(blogData?.date).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                  {", "}
                </span>
                <span className="text-gray-900 font-semibold dark:text-gray-200">
                  {new Date(blogData?.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;

const shimmerEffect = (
  <div className="relative mx-auto max-w-screen-xl animate-pulse dark:bg-gray-900">
    <div className="border rounded-lg overflow-hidden shadow-lg p-10 flex flex-col md:flex-row gap-10 bg-gray-200 dark:bg-gray-800">
      <div className="w-full h-auto md:w-[330px] md:h-[428px] bg-gray-300 dark:bg-gray-600" />
      <div className="p-6 flex-1">
        <div className="h-8 bg-gray-300 dark:bg-gray-600 mb-4 w-1/2" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 w-3/4" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 w-full" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 w-full" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 w-full" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 w-full" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 w-full" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 w-full" />
        <div className="h-6 bg-gray-300 dark:bg-gray-600 mt-8 w-1/5 absolute right-10" />
      </div>
    </div>
  </div>
);

