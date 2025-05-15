import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAnalysis = () => {
    const analysisSection = document.getElementById('analysis-section');
    if (analysisSection) {
      analysisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-md"
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              x: Math.random() * 100 - 50 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 20 + 10,
              ease: 'linear',
            }}
          />
        ))}
      </div>
      
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Analyze Sentiment with <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-300 to-secondary-500">Precision</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            SenSense.AI leverages advanced natural language processing to detect sentiment 
            in text and provides in-depth analysis of emotional tone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToAnalysis}
              className="bg-white text-primary-800 hover:bg-primary-50 px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              Try it now
            </button>
            <a href="https://github.com/Templar121/IMDB-Sentiment-Analysis-with-CNN-and-LIME" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent text-white border-2 border-white/30 hover:border-white/60 px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition transform hover:scale-105">
                Learn more
              </button>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <button 
            onClick={scrollToAnalysis}
            className="text-white/70 hover:text-white focus:outline-none transition"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;