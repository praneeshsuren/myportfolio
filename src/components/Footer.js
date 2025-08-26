import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
    <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} Praneesh Surendran. All Rights Reserved.
      </p>
      <div className="flex space-x-6">
        <a href="https://github.com/praneeshsuren" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/praneesh-surendran-3a4324286/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:praneeshsuren@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          <Mail size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;