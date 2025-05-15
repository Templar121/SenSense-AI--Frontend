import React from 'react';
import { BarChart, Brain, Gauge, Sparkles, LineChart, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Sentiment Prediction',
    description: 'Quickly determine if text has a positive, negative, or neutral sentiment.',
    icon: <Gauge className="h-6 w-6" />
  },
  {
    name: 'Word Influence Analysis',
    description: 'See which words have the strongest impact on the overall sentiment.',
    icon: <BarChart className="h-6 w-6" />
  },
  {
    name: 'Advanced AI Models',
    description: 'Powered by state-of-the-art natural language processing algorithms.',
    icon: <Brain className="h-6 w-6" />
  },
  {
    name: 'Contextual Understanding',
    description: 'Our AI understands nuance and context beyond simple keyword matching.',
    icon: <Sparkles className="h-6 w-6" />
  },
  {
    name: 'Sentiment Trends',
    description: 'Track sentiment changes over time with historical analysis.',
    icon: <LineChart className="h-6 w-6" />
  },
  {
    name: 'Privacy-Focused',
    description: 'Your data stays private, with secure processing and optional local deployment.',
    icon: <Lock className="h-6 w-6" />
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Powerful Features</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            SenSense.AI provides comprehensive tools to understand the emotional context behind any text.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-neutral-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="inline-flex items-center justify-center rounded-full bg-primary-100 p-3 text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{feature.name}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;