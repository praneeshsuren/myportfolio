import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu on link click
  };

  const navLinks = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Praneesh Surendran</a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={(e) => handleScroll(e, link.toLowerCase())}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-gray-900"
        >
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map(link => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={(e) => handleScroll(e, link.toLowerCase())}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium"
              >
                {link}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
