import React from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Activity, Calendar, MapPin, Link2 } from 'lucide-react'
import avatar from "../assets/avatar.jpg"
import { userAuthStore } from '../store/userAuthStore'

function ProfilePage() {
  const {user} = userAuthStore()

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Banner */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-32 sm:h-48 relative">
            <motion.div
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2"
            >
              <div className="relative group">
                <img
                  src={avatar}
                  alt={user?.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 sm:pt-24 px-6 sm:px-8 pb-8">
            <div className="text-center mb-8">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
              >
                {user?.name || 'John Doe'}
              </motion.h1>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Info Cards */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 flex-shrink-0" />
                    <span className="ml-3 text-sm sm:text-base text-gray-700 truncate">
                      {user?.email || 'john.doe@example.com'}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center">
                    <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 flex-shrink-0" />
                    <span className="ml-3 text-sm sm:text-base text-gray-700">
                      Status: <span className="text-green-600 font-medium">Active</span>
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 flex-shrink-0" />
                    <span className="ml-3 text-sm sm:text-base text-gray-700">
                      Joined March 2024
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 flex-shrink-0" />
                    <span className="ml-3 text-sm sm:text-base text-gray-700">
                      San Francisco, CA
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center">
                    <Link2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 flex-shrink-0" />
                    <span className="ml-3 text-sm sm:text-base text-gray-700">
                      github.com/johndoe
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 grid grid-cols-3 gap-4 sm:gap-6"
            >
              <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600">24</div>
                <div className="text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600">142</div>
                <div className="text-sm text-gray-600 mt-1">Contributions</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600">10</div>
                <div className="text-sm text-gray-600 mt-1">Repositories</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfilePage