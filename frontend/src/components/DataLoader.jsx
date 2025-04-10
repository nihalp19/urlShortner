import { useState, useEffect } from 'react';
import { BarChart3, Globe, Laptop, MousePointer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function DataLoader({ urlLoading }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (urlLoading) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % loadingItems.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [urlLoading]);

  if (!urlLoading) return null;

  const loadingItems = [
    { icon: MousePointer, text: 'Analyzing Click Data...' },
    { icon: Laptop, text: 'Processing Device Information...' },
    { icon: BarChart3, text: 'Compiling Browser Statistics...' },
    { icon: Globe, text: 'Mapping Geographic Data...' }
  ];

  const CurrentIcon = loadingItems[currentIndex].icon;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg p-6 shadow-xl max-w-[280px] w-full mx-4"
      >
        <div className="flex items-center justify-center mb-4">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="text-blue-500"
          >
            <CurrentIcon size={24} />
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center"
          >
            <p className="text-sm font-medium text-gray-700">
              {loadingItems[currentIndex].text}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="mt-3 flex justify-center gap-1">
          {loadingItems.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default DataLoader;