const API_URL = 'https://sentiment-api-hkfw.onrender.com';

export const checkApiStatus = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_URL}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add timeout to prevent long waiting times
      signal: AbortSignal.timeout(5000)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Unable to connect to the sentiment analysis service. Please check your internet connection.');
    } else if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Connection timed out. The service might be temporarily unavailable.');
    }
    console.error('Error checking API status:', error);
    throw new Error('Failed to connect to the API. Please try again later.');
  }
};

export const predictSentiment = async (text: string): Promise<SentimentResult> => {
  try {
    const response = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ review: text }),
      signal: AbortSignal.timeout(10000)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error predicting sentiment:', error);
    throw new Error('Failed to analyze text. Please try again later.');
  }
};

export const analyzeSentiment = async (text: string): Promise<AnalysisResult> => {
  try {
    const response = await fetch(`${API_URL}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ review: text }),
      signal: AbortSignal.timeout(10000)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    throw new Error('Failed to analyze text. Please try again later.');
  }
};