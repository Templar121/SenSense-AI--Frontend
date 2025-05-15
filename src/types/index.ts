export interface SentimentResult {
  sentiment: 'positive' | 'negative' | 'neutral';
  score: number;
}

export interface WordContribution {
  word: string;
  contribution: number;
}

export interface AnalysisResult {
  review: string;
  explanation: WordContribution[];
}

export interface ApiResponse {
  message?: string;
  error?: string;
}