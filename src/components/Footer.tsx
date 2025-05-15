import React from 'react';
import { Brain, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-primary-400" />
              <span className="ml-2 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300">
                SenSense<span className="text-primary-200 font-bold">.AI</span>
              </span>
            </div>
            <p className="text-primary-200 mb-4">
              Advanced sentiment analysis powered by artificial intelligence.
              Discover the emotional tone behind text with precision and depth.
            </p>
            <p className="text-primary-300 text-sm">
              © 2025 SenSense.AI. All rights reserved.
              <br />
              Made by Subhayan Mukherjee.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h3 className="text-lg font-semibold mb-4 text-secondary-300">Connect with me</h3>
            <div className="flex space-x-6">
              <a href="https://github.com/Templar121" className="text-secondary-400 hover:text-white transition transform hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/subhayan-mukherjee-0906b0274/" className="text-secondary-400 hover:text-white transition transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:subhayanmukherjee78@gmail.com" className="text-secondary-400 hover:text-white transition transform hover:scale-110">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;