import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { BarChart, ExternalLink, Trash2 } from 'lucide-react'
import { urlStore } from '../store/urlStore'

function LinkPage() {
  const { allUrls ,getAllUrls} = urlStore()


  useEffect(() => {
    getAllUrls()
  },[getAllUrls])

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Your Links
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-gray-600"
          >
            Manage all your shortened links in one place
          </motion.p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {allUrls && allUrls.map((link) => (
            <motion.div
              key={link._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-900 truncate mb-1">
                    {link?.originalUrl}
                  </p>
                  <p className="text-xs sm:text-sm text-indigo-600 break-all">
                    {link?.shortUrl}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                    <span>Clicks: {link?.clickInfo.length}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Expires: {link?.expirationDate.split("T")[0]}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Created: {link?.createdAt.split("T")[0]}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 sm:ml-4 border-t sm:border-t-0 pt-3 sm:pt-0">
                  <RouterLink
                    to={`/analytics/${link?._id}`}
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <BarChart size={18} className="sm:w-5 sm:h-5" />
                    </motion.div>
                  </RouterLink>
                  <a
                    href={link?.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <ExternalLink size={18} className="sm:w-5 sm:h-5" />
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