import React from 'react';
import { SentimentResult as SentimentResultType } from '../types';
import { motion } from 'framer-motion';
import { SmilePlus, Meh, Frown } from 'lucide-react';

interface SentimentResultProps {
  result: SentimentResultType;
}

const SentimentResult: React.FC<SentimentResultProps> = ({ result }) => {
  const { sentiment, score } = result;
  
  const getEmotionIcon = () => {
    switch (sentiment) {
      case 'positive':
        return <SmilePlus className="w-16 h-16 text-success-500" />;
      case 'negative':
        return <Frown className="w-16 h-16 text-error-500" />;
      case 'neutral':
        return <Meh className="w-16 h-16 text-warning-500" />;
    }
  };
  
  const getSentimentColor = () => {
    switch (sentiment) {
      case 'positive':
        return 'from-success-500 to-success-700';
      case 'negative':
        return 'from-error-500 to-error-700';
      case 'neutral':
        return 'from-warning-500 to-warning-700';
    }
  };
  
  const getConfidenceLabel = () => {
    const confidenceScore = sentiment === 'negative' ? 1 - score : score;
    if (confidenceScore > 0.8) return 'Very high';
    if (confidenceScore > 0.6) return 'High';
    if (confidenceScore > 0.4) return 'Moderate';
    return 'Low';
  };
  
  const scorePercentage = Math.round((sentiment === 'negative' ? 1 - score : score) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Sentiment Analysis Result</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {getEmotionIcon()}
          </motion.div>
          <h3 className="mt-2 text-xl font-semibold capitalize">{sentiment}</h3>
        </div>
        
        <div className="flex-1 space-y-6">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-neutral-700">Sentiment Score</span>
              <span className="text-sm font-medium text-neutral-700">
                {score.toFixed(2)} ({sentiment})
              </span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2.5 overflow-hidden">
              <motion.div 
                className={`h-full bg-gradient-to-r ${getSentimentColor()}`}
                initial={{ width: '0%' }}
                animate={{ width: `${score * 100}%` }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-neutral-700">Confidence</span>
              <span className="text-sm font-medium text-neutral-700">{getConfidenceLabel()} ({scorePercentage}%)</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2.5 overflow-hidden">
              <motion.div 
                className="h-full bg-primary-600"
                initial={{ width: '0%' }}
                animate={{ width: `${scorePercentage}%` }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SentimentResult;