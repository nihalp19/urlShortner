import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Link2, ArrowRight, Scissors, QrCode } from 'lucide-react';
import { urlStore } from '../store/urlStore';

function HomePage() {
  const [url, setUrl] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  
  const { shortenedUrl, generateShortUrl } = urlStore();

  const handleShorten = () => {
    generateShortUrl({ originalUrl: url });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block p-2 sm:p-3 bg-indigo-600 rounded-full mb-6 sm:mb-8"
          >
            <Link2 size={24} className="text-white sm:hidden" />
            <Link2 size={32} className="text-white hidden sm:block" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Shorten Your Links
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg sm:text-xl mb-8 sm:mb-12 px-4"
          >
            Transform your long URLs into clean, manageable links in seconds
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 mb-8 sm:mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your long URL here..."
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-base sm:text-lg transition-colors"
              />
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleShorten}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
              >
                <span>Shorten</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Scissors size={18} className="sm:hidden" />
                  <Scissors size={20} className="hidden sm:block" />
                </motion.div>
              </motion.button>
            </div>

            {shortenedUrl?.shortUrl && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 bg-indigo-50 rounded-lg sm:rounded-xl gap-3 sm:gap-0"
              >
                <div className="flex-1 w-full sm:w-auto">
                  <p className="font-medium text-indigo-600 text-sm sm:text-base break-all">{shortenedUrl?.shortUrl}</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowQRCode(!showQRCode)}
                    className="p-2 hover:bg-indigo-100 rounded-lg text-indigo-600"
                  >
                    <QrCode size={18} className="sm:hidden" />
                    <QrCode size={20} className="hidden sm:block" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigator.clipboard.writeText(shortenedUrl?.shortUrl)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex-1 sm:flex-none"
                  >
                    Copy
                  </motion.button>
                </div>
              </motion.div>
            )}

            <AnimatePresence>
              {showQRCode && shortenedUrl?.shortUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-3 sm:p-4 bg-white border border-gray-200 rounded-lg sm:rounded-xl"
                >
                  <div className="flex justify-center">
                    <QRCodeSVG value={shortenedUrl?.shortUrl} size={160} className="sm:hidden" />
                    <QRCodeSVG value={shortenedUrl?.shortUrl} size={200} className="hidden sm:block" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 px-2"
          >
            {[
              {
                icon: <Link2 size={24} />,
                title: "Paste",
                description: "Paste your long URL into the input field above"
              },
              {
                icon: <Scissors size={24} />,
                title: "Shorten",
                description: "Click the button to generate your shortened URL"
              },
              {
                icon: <ArrowRight size={24} />,
                title: "Share",
                description: "Copy and share your shortened link anywhere"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-indigo-600">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;