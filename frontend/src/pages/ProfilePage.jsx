import React from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Activity } from 'lucide-react'

function ProfilePage() {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    status: 'Active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
  }

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-32" />
          <div className="relative px-6 pb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="absolute -top-16 left-1/2 transform -translate-x-1/2"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-white bg-white"
              />
            </motion.div>

            <div className="mt-20 text-center">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-bold text-gray-900"
              >
                {user.name}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 space-y-4"
            >
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Mail className="w-6 h-6 text-indigo-600" />
                <span className="ml-3 text-gray-700">{user.email}</span>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Activity className="w-6 h-6 text-indigo-600" />
                <span className="ml-3 text-gray-700">Status: {user.status}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <button
                className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                onClick={() => {/* Handle edit profile */}}
              >
                Edit Profile
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfilePage