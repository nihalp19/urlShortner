import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, BarChart3, LogOut } from 'lucide-react';
import { userAuthStore } from '../store/userAuthStore';

export function Sidebar() {

  const { isSideBarOpen, setisSideBarOpen ,logout} = userAuthStore()
  console.log(isSideBarOpen)

  const menuItems = [
    { icon: <User size={20} />, label: "Profile" },
    { icon: <BarChart3 size={20} />, label: "Analytics" },
    { icon: <LogOut size={20} />, label: "Logout" }
  ];

  const handleLogout = (item) => {
    if(item.label === "Logout")
    logout()
}

  return (
    <AnimatePresence>
      {isSideBarOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={setisSideBarOpen}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed left-0 top-0 h-full w-64 bg-white shadow-2xl z-50"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-indigo-600">Menu</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={setisSideBarOpen}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 hover:bg-indigo-50 rounded-lg cursor-pointer mb-2"
                >
                  <span className="text-gray-600">{item.icon}</span>
                  <span className="font-medium text-gray-700" onClick={() => handleLogout(item)}>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
