import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Menu } from 'lucide-react';
import { userAuthStore } from '../store/userAuthStore';
import avatar from "../assets/avatar.jpg"

export function Navbar() {
    const {user,setisSideBarOpen} = userAuthStore()


    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={setisSideBarOpen}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                            <Menu size={24} />
                        </motion.button>
                        <Link2 size={24} className="text-indigo-600" />
                        <span className="font-bold text-xl text-indigo-600">URLify</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-lg cursor-pointer"
                        >
                            <img
                                src={avatar}
                                alt={user?.name}
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="font-medium text-gray-700">{user?.name}</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
