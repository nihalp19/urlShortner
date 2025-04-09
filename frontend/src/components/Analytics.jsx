import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, PieChart, Link, Globe, Smartphone, Monitor } from 'lucide-react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell
} from 'recharts'
import { format, subDays } from 'date-fns'

function Analytics() {
  // Mock data
  const clickData = Array.from({ length: 7 }, (_, i) => ({
    date: format(subDays(new Date(), i), 'MMM dd'),
    clicks: Math.floor(Math.random() * 100)
  })).reverse()

  const deviceData = [
    { name: 'Desktop', value: 300 },
    { name: 'Mobile', value: 200 },
    { name: 'Tablet', value: 100 }
  ]

  const browserData = [
    { name: 'Chrome', value: 400 },
    { name: 'Firefox', value: 200 },
    { name: 'Safari', value: 100 },
    { name: 'Edge', value: 50 }
  ]

  const COLORS = [
    'rgba(99, 102, 241, 0.8)',
    'rgba(167, 139, 250, 0.8)',
    'rgba(216, 180, 254, 0.8)',
    'rgba(147, 197, 253, 0.8)'
  ]

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block p-3 bg-indigo-600 rounded-full mb-8"
          >
            <BarChart size={32} className="text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Link Analytics
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            https://short.url/abc123
          </motion.div>
        </div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { icon: <Link size={24} />, label: 'Total Clicks', value: '1,234' },
            { icon: <Globe size={24} />, label: 'Countries', value: '24' },
            { icon: <Smartphone size={24} />, label: 'Devices', value: '3' },
            { icon: <Monitor size={24} />, label: 'Browsers', value: '4' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Clicks Over Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Clicks Over Time</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={clickData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="clicks"
                    stroke="#6366f1"
                    fill="rgba(99, 102, 241, 0.2)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Device & Browser Distribution */}
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Device Distribution</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Browser Distribution</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={browserData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {browserData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Analytics