import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
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
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-500 hover:to-secondary-500 transition-all transform hover:scale-105"
            >
              My Projects
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-r from-primary-800 to-secondary-800"
          >
            <div className="px-4 pt-2 pb-3 space-y-2">
              <a
                href="#"
                className="block px-4 py-2 rounded-lg bg-primary-700 text-white hover:bg-primary-600 transition-all"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-4 py-2 rounded-lg bg-secondary-700 text-white hover:bg-secondary-600 transition-all"
              >
                About
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-500 hover:to-secondary-500 transition-all"
              >
                My Projects
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar