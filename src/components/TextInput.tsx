import React, { useState, useEffect } from 'react';
import { SendHorizontal, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface TextInputProps {
  onSubmit: (text: string) => void;
  isLoading: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState('');
  const [loadingDots, setLoadingDots] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('Analyzing');
  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeInterval: NodeJS.Timeout;

    if (isLoading) {
      // Animate loading dots
      interval = setInterval(() => {
        setLoadingDots(prev => prev.length >= 3 ? '' : prev + '.');
      }, 500);

      // Track loading time
      timeInterval = setInterval(() => {
        setLoadingTime(prev => {
          const newTime = prev + 1;
          // Update loading message based on time elapsed
          if (newTime > 10) {
            setLoadingMessage('Processing long text');
          } else if (newTime > 5) {
            setLoadingMessage('Still analyzing');
          }
          return newTime;
        });
      }, 1000);
    } else {
      setLoadingTime(0);
      setLoadingMessage('Analyzing');
    }

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, [isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isLoading) {
      onSubmit(text);
    }
  };

  const examples = [
    "I absolutely loved the movie! The acting was superb and the storyline was engaging.",
    "The customer service was terrible. I waited for hours and no one helped me.",
    "The weather is nice today, I might go for a walk later this afternoon."
  ];

  const handleExampleClick = (example: string) => {
    setText(example);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Enter your text for analysis</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full h-32 p-4 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
            disabled={isLoading}
          />
          {text && (
            <div className="mt-2 text-sm text-neutral-600">
              Characters: {text.length}
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-neutral-500">Examples:</span>
            {examples.map((example, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleExampleClick(example)}
                className="text-xs px-2 py-1 bg-neutral-100 hover:bg-neutral-200 rounded text-neutral-700 transition"
                disabled={isLoading}
              >
                Example {index + 1}
              </button>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={!text.trim() || isLoading}
            className={`px-6 py-2 rounded-lg flex items-center justify-center text-white font-medium min-w-[200px] transition
              ${!text.trim() || isLoading 
                ? 'bg-neutral-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500'}`}
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                <span className="min-w-[120px]">{loadingMessage}{loadingDots}</span>
              </>
            ) : (
              <>
                <SendHorizontal className="w-5 h-5 mr-2" />
                Analyze Sentiment
              </>
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default TextInput;