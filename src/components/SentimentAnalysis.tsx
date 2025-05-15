import React from 'react';
import { AnalysisResult } from '../types';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface SentimentAnalysisProps {
  analysis: AnalysisResult;
}

const SentimentAnalysis: React.FC<SentimentAnalysisProps> = ({ analysis }) => {
  const { explanation } = analysis;
  
  // Sort words by absolute contribution value for better visualization
  const sortedExplanation = [...explanation].sort((a, b) => 
    Math.abs(b.contribution) - Math.abs(a.contribution)
  );

  const getBarColor = (contribution: number) => {
    const absContribution = Math.abs(contribution);
    if (contribution > 0) {
      if (absContribution > 0.3) return 'bg-success-600';
      if (absContribution > 0.2) return 'bg-success-500';
      return 'bg-success-400';
    } else {
      if (absContribution > 0.3) return 'bg-error-600';
      if (absContribution > 0.2) return 'bg-error-500';
      return 'bg-error-400';
    }
  };

  const getContributionDescription = (contribution: number) => {
    const absContribution = Math.abs(contribution);
    if (absContribution > 0.3) return 'Very High Impact';
    if (absContribution > 0.2) return 'High Impact';
    if (absContribution > 0.1) return 'Moderate Impact';
    return 'Low Impact';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Word Impact Analysis</h2>
      
      {sortedExplanation.length === 0 ? (
        <p className="text-neutral-500 italic">No word analysis available.</p>
      ) : (
        <div className="space-y-6">
          <div className="space-y-3">
            {sortedExplanation.map((item, index) => {
              const contributionPercentage = Math.abs(item.contribution) * 100;
              const isPositive = item.contribution > 0;
              
              return (
                <motion.div
                  key={`${item.word}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right">
                      <span className="font-medium text-sm">{item.word}</span>
                    </div>
                    
                    <div className="flex-1 h-8 bg-neutral-100 rounded-lg overflow-hidden flex items-center">
                      <div
                        className={`h-full ${getBarColor(item.contribution)} transition-all duration-500 flex items-center`}
                        style={{ width: `${contributionPercentage}%` }}
                      >
                        <span className="px-2 text-white text-sm whitespace-nowrap">
                          {isPositive ? (
                            <TrendingUp className="w-4 h-4 inline-block mr-1" />
                          ) : (
                            <TrendingDown className="w-4 h-4 inline-block mr-1" />
                          )}
                          {contributionPercentage.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-32">
                      <span className={`text-sm ${isPositive ? 'text-success-600' : 'text-error-600'}`}>
                        {getContributionDescription(item.contribution)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-8 pt-4 border-t border-neutral-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-neutral-700 mb-2">Positive Impact</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-success-600"></div>
                    <span className="text-sm">Very High Impact (&gt;30%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-success-500"></div>
                    <span className="text-sm">High Impact (20-30%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-success-400"></div>
                    <span className="text-sm">Moderate Impact (&lt;20%)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-neutral-700 mb-2">Negative Impact</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-error-600"></div>
                    <span className="text-sm">Very High Impact (&gt;30%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-error-500"></div>
                    <span className="text-sm">High Impact (20-30%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-error-400"></div>
                    <span className="text-sm">Moderate Impact (&lt;20%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SentimentAnalysis;