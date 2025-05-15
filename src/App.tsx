import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnalysisSection from './components/AnalysisSection';
import Features from './components/Features';
import Footer from './components/Footer';
import { checkApiStatus } from './services/api';
import { AlertCircle, RefreshCw } from 'lucide-react';

function App() {
  const [apiStatus, setApiStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        await checkApiStatus();
        setApiStatus('ready');
        setErrorMessage('');
      } catch (error) {
        setApiStatus('error');
        setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
        console.error('API is not available:', error);
      }
    };
    
    checkStatus();

    // Retry logic - attempt to reconnect every 30 seconds up to 3 times
    const retryInterval = setInterval(() => {
      if (apiStatus === 'error' && retryCount < 3) {
        checkStatus();
        setRetryCount(prev => prev + 1);
      }
    }, 30000);

    return () => clearInterval(retryInterval);
  }, [apiStatus, retryCount]);

  const handleRetry = () => {
    setApiStatus('loading');
    setRetryCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <Navbar />
      <main>
        <Hero />
        {apiStatus === 'error' ? (
          <div className="max-w-2xl mx-auto text-center py-12 px-4">
            <div className="flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-error-600 mr-2" />
              <h2 className="text-xl font-semibold text-error-600">Service Unavailable</h2>
            </div>
            <p className="text-gray-700 mb-6">{errorMessage}</p>
            <button
              onClick={handleRetry}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry Connection
            </button>
          </div>
        ) : apiStatus === 'loading' ? (
          <div className="text-center py-12 px-4">
            <div className="animate-spin inline-block w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full mb-4"></div>
            <p className="text-gray-600">Connecting to the sentiment analysis service...</p>
          </div>
        ) : (
          <AnalysisSection />
        )}
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;