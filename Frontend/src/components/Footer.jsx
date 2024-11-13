import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-gray-800 dark:bg-gray-900 dark:text-white py-10 bg-zinc-50  ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-20 ">
        <div className="flex flex-col mb-5 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Food Nutrition App</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Your trusted source for nutritional guidance.</p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-40">
          <div className="mb-5 md:mb-0">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm  hover:underline p-1  font-medium transition">Home</a></li>
              <li><a href="#" className="text-sm  hover:underline p-1  font-medium transition">About</a></li>
              <li><a href="#" className="text-sm  hover:underline p-1  font-medium transition">Contact</a></li>
            </ul>
          </div>

          <div className="mb-5 md:mb-0">
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <FaPhone className="mr-2 text-black dark:text-blue-500" />
                <span className="text-sm">+1 (234) 567-8901</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-black dark:text-blue-500" />
                <span className="text-sm">info@foodnutritionapp.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-black dark:text-blue-500" />
                <span className="text-sm">123 Nutrition St, Healthy City, CA</span>
              </div>
            </div>
          </div>

          <div className="mb-5 md:mb-0">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 text-xl">
              <a href="#" className=" hover:underline p-1  font-medium transition"><FaFacebookF className="text-black dark:text-blue-500" size={30}  /></a>
              <a href="#" className=" hover:underline p-1  font-medium transition"><FaTwitter className="text-black dark:text-blue-500" size={30} /></a>
              <a href="#" className=" hover:underline p-1  font-medium transition"><FaInstagram className="text-black dark:text-blue-500" size={30}  /></a>
              <a href="#" className=" hover:underline p-1  font-medium transition"><FaLinkedin  className="text-black dark:text-blue-500" size={30} /></a>
            </div>
            <div className="mb-5 md:mb-0 smL:ml-0 -ml-12">
            <h4 className="font-semibold mb-2">Subscribe</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-l-md bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <button className="p-2 dark:bg-blue-600 bg-blue-400 hover:bg-blue-500 rounded-r-md dark:hover:bg-blue-700 transition">Subscribe</button>
            </div>
          </div>
          </div>

   
        </div>
      </div>
      <div className="text-center text-sm mt-5 text-gray-400 dark:text-gray-600">
        &copy; 2024 Food Nutrition App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

