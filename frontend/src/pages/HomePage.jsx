import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Link2, ArrowRight, Scissors, QrCode } from 'lucide-react';
import { urlStore } from '../store/urlStore';


function HomePage() {
  const [url, setUrl] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  
  const {shortenedUrl,generateShortUrl} = urlStore()


  const handleShorten = () => {
    generateShortUrl({originalUrl : url})
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block p-3 bg-indigo-600 rounded-full mb-8"
          >
            <Link2 size={32} className="text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Shorten Your Links
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-xl mb-12"
          >
            Transform your long URLs into clean, manageable links in seconds
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          >
            <div className="flex gap-4 mb-6">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your long URL here..."
                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 text-lg transition-colors"
              />
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleShorten}
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-indigo-700 transition-colors"
              >
                <span>Shorten</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Scissors size={20} />
                </motion.div>
              </motion.button>
            </div>

            {shortenedUrl?.shortUrl && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl"
              >
                <div className="flex-1">
                  <p className="font-medium text-indigo-600">{shortenedUrl?.shortUrl}</p>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowQRCode(!showQRCode)}
                    className="p-2 hover:bg-indigo-100 rounded-lg text-indigo-600"
                  >
                    <QrCode size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigator.clipboard.writeText(shortenedUrl?.shortUrl)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
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
                  className="mt-4 p-4 bg-white border border-gray-200 rounded-xl"
                >
                  <div className="flex justify-center">
                    <QRCodeSVG value={shortenedUrl?.shortUrl} size={200} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
