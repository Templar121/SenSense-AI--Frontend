import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BarChart2, Brain, Target } from 'lucide-react';

const metrics = [
  {
    title: "Overall Accuracy",
    value: "90.8%",
    description: "Across all sentiment categories",
    icon: <CheckCircle className="w-6 h-6 text-success-500" />,
    color: "from-success-500 to-success-600"
  },
  {
    title: "Precision",
    value: "91.5%",
    description: "Correct positive predictions",
    icon: <Target className="w-6 h-6 text-primary-500" />,
    color: "from-primary-500 to-primary-600"
  },
  {
    title: "F1 Score",
    value: "89.6%",
    description: "Balance of precision and recall",
    icon: <BarChart2 className="w-6 h-6 text-secondary-500" />,
    color: "from-secondary-500 to-secondary-600"
  },
  {
    title: "Model Version",
    value: "v1.1.0",
    description: "Latest CNN based XAI Model",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    color: "from-purple-500 to-purple-600"
  }
];

const AccuracyMetrics: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Model Performance</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our sentiment analysis model achieves state-of-the-art accuracy through continuous training and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-neutral-50">
                  {metric.icon}
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                {metric.title}
              </h3>
              <p className="text-neutral-600 text-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccuracyMetrics;