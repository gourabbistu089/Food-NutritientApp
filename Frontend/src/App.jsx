import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Ingredients from './pages/IngredientsPage.jsx';
import Recipe from './pages/Recipe';
import BlogItem from './components/BlogItem.jsx';
import Blog from './pages/Blog.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div>
        <Navbar />
        <main className="bg-white dark:bg-gray-900 min-h-screen pt-24 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogItem />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/recipes" element={<Recipe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
