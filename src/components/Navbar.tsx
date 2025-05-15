import React from 'react';
import { Brain } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-primary-900 to-secondary-900 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Brain className="h-8 w-8 text-primary-300" />
              <span className="ml-2 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300">
                SenSense<span className="text-primary-200 font-bold">.AI</span>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="px-4 py-2 rounded-lg bg-primary-700 text-white hover:bg-primary-600 transition-all transform hover:scale-105"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 rounded-lg bg-secondary-700 text-white hover:bg-secondary-600 transition-all transform hover:scale-105"
            >
              About
            </a>
            <a 
              href="https://subhayanmukherjee.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-500 hover:to-secondary-500 transition-all transform hover:scale-105"
            >
              Know more about Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;