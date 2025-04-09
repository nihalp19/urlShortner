import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';
import {
  AreaChart,
  Area,
  PieChart as RePieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

import { Link, Globe, Smartphone, Monitor } from 'lucide-react';
import { urlStore } from '../store/urlStore';
import LoaderSpinner from './LoaderSpinner';
import { userAuthStore } from '../store/userAuthStore';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Dummy chart data


function Analytics() {

  const { user } = userAuthStore()
  const { getUrl, chartData, analyticalUrl, urlLoading } = urlStore()
  const { id } = useParams()

  useEffect(() => {
    getUrl(id)
  }, [getUrl])


  const clickData = chartData?.clickData || [];
  const deviceData = chartData?.deviceData || [];
  const browserData = chartData?.browserData || [];
  const geoData = chartData?.countryData || [];

  const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981'];
  console.log("geoData", geoData)
  console.log(chartData)


  if (urlLoading || !user) <LoaderSpinner />





  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.div className="max-w-7xl mx-auto">
        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {[
            {
              icon: <Link size={24} />,
              label: 'Total Clicks',
              value: analyticalUrl?.clickInfo.length
            },
            {
              icon: <Globe size={24} />,
              label: 'Countries',
              value: chartData?.countryData.length
            },
            {
              icon: <Smartphone size={24} />,
              label: 'Devices',
              value: chartData?.deviceData.length
            },
            {
              icon: <Monitor size={24} />,
              label: 'Browsers',
              value: chartData?.browserData.length
            }
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

        {/* Geographic Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-lg mb-8"
        >
          <h3 className="text-xl font-semibold mb-4">Geographic Distribution</h3>
          <div className="h-[400px]">
            <div className="w-full h-[400px] overflow-hidden">
              <ComposableMap
                projectionConfig={{
                  scale: 150,
                  center: [0, 20]
                }}
                width={800}
                height={400}
              >
                <ZoomableGroup>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#E5E7EB"
                          stroke="#D1D5DB"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: 'none' },
                            hover: { fill: 'rgba(99, 102, 241, 0.2)', outline: 'none' },
                            pressed: { outline: 'none' }
                          }}
                        />
                      ))
                    }
                  </Geographies>
                  {chartData && geoData.map(({ name, coordinates, clicks }) => {
                    // Ensure coordinates are valid before rendering the marker
                    if (!coordinates || coordinates.length === 0) return null; // Skip if coordinates are null or empty

                    // Modify the radius to make the points larger by multiplying the value
                    const radius = Math.sqrt(clicks) / 3 * 10; // Increase the multiplier (4 in this case)

                    return (
                      <Marker key={name} coordinates={coordinates}>
                        <motion.circle
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                          r={radius}
                          fill="rgba(99, 102, 241, 0.6)"
                          stroke="#fff"
                          strokeWidth={1}
                        />
                        <motion.circle
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          r={radius}
                          fill="rgba(99, 102, 241, 0.2)"
                          stroke="none"
                        />
                      </Marker>
                    );
                  })}
                </ZoomableGroup>
              </ComposableMap>
            </div>
          </div>
        </motion.div>

        {/* Charts Section (Updated for full-width stacked layout) */}
        <div className="flex flex-col gap-8">
          {/* Clicks Over Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
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

          {/* Device Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
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
                    {chartData && deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Browser Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
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
                    {chartData && browserData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Analytics;
