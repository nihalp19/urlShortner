import React from 'react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { BarChart, ExternalLink, Trash2 } from 'lucide-react'

function LinkPage() {
  // Mock data for links
  const links = [
    {
      id: '1',
      originalUrl: 'https://example.com/very/long/url/that/needs/to/be/shortened/1',
      shortUrl: 'https://short.url/abc123',
      clicks: 1234,
      expiryDate: '2024-12-31',
      createdAt: '2023-12-01'
    },
    {
      id: '2',
      originalUrl: 'https://example.com/another/very/long/url/2',
      shortUrl: 'https://short.url/def456',
      clicks: 567,
      expiryDate: '2024-12-31',
      createdAt: '2023-12-02'
    }
  ]

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Your Links
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            Manage all your shortened links in one place
          </motion.p>
        </div>

        <div className="space-y-4">
          {links.map((link) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {link.originalUrl}
                  </p>
                  <p className="text-sm text-indigo-600">
                    {link.shortUrl}
                  </p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span className="mr-4">Clicks: {link.clicks}</span>
                    <span className="mr-4">Expires: {link.expiryDate}</span>
                    <span>Created: {link.createdAt}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 ml-4">
                  <RouterLink
                    to={`/analytics/${link.id}`}
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <BarChart size={20} />
                    </motion.div>
                  </RouterLink>
                  <a
                    href={link.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <ExternalLink size={20} />
                    </motion.div>
                  </a>
                  <button
                    onClick={() => {/* Handle delete */}}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Trash2 size={20} />
                    </motion.div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default LinkPage