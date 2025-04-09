import React from 'react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { BarChart, ExternalLink, Trash2 } from 'lucide-react'
import { urlStore } from '../store/urlStore'

function LinkPage() {

  const {allUrls} = urlStore()



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
          {allUrls && allUrls.map((link) => (
            <motion.div
              key={link._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {link?.originalUrl}
                  </p>
                  <p className="text-sm text-indigo-600">
                    {link?.shortUrl}
                  </p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span className="mr-4">Clicks: {link?.clickInfo.length}</span>
                    <span className="mr-4">Expires: {link?.expirationDate.split("T")[0]}</span>
                    <span>Created: {link?.createdAt.split("T")[0]}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 ml-4">
                  <RouterLink
                    to={`/analytics/${link?._id}`}
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <BarChart size={20} />
                    </motion.div>
                  </RouterLink>
                  <a
                    href={link?.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <ExternalLink size={20} />
                    </motion.div>
                  </a>
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