import React, { useState } from 'react';
import TextInput from './TextInput';
import SentimentResult from './SentimentResult';
import SentimentAnalysis from './SentimentAnalysis';
import { predictSentiment, analyzeSentiment } from '../services/api';
import { SentimentResult as SentimentResultType, AnalysisResult } from '../types';
import { motion } from 'framer-motion';

const AnalysisSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sentimentResult, setSentimentResult] = useState<SentimentResultType | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [view, setView] = useState<'predict' | 'analyze'>('predict');
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const handleTextSubmit = async (text: string) => {
    setIsLoading(true);
    try {
      // First get prediction
      const prediction = await predictSentiment(text);
      setSentimentResult(prediction);
      
      // Then get analysis
      const analysis = await analyzeSentiment(text);
      setAnalysisResult(analysis);
      
      setHasAnalyzed(true);
    } catch (error) {
      console.error('Error analyzing text:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="analysis-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Sentiment Analysis Tool</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Enter any text to analyze its sentiment. Our AI will determine if the text has a positive or 
            negative tone and provide a detailed breakdown of influential words.
          </p>
        </div>
        
        <TextInput onSubmit={handleTextSubmit} isLoading={isLoading} />
        
        {hasAnalyzed && (
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  onClick={() => setView('predict')}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg border border-r-0 
                    ${view === 'predict' 
                      ? 'bg-primary-600 text-white border-primary-600' 
                      : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'}`}
                >
                  Sentiment Prediction
                </button>
                <button
                  type="button"
                  onClick={() => setView('analyze')}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg border 
                    ${view === 'analyze' 
                      ? 'bg-primary-600 text-white border-primary-600' 
                      : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'}`}
                >
                  Word Analysis
                </button>
              </div>
            </div>
            
            <motion.div
              key={view}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {view === 'predict' && sentimentResult && (
                <SentimentResult result={sentimentResult} />
              )}
              
              {view === 'analyze' && analysisResult && (
                <SentimentAnalysis analysis={analysisResult} />
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisSection;