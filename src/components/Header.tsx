import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoreHorizontal, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Board of Directors', path: '/board' },
    { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Club Name */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="Power In Action Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                  Power In Action
                </h1>
                <p className="text-xs text-slate-300">Interact Club of Bishnu Memorial</p>
              </div>
            </Link>

            {/* 3-dot menu button for ALL devices */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-sky-400 hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <MoreHorizontal className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Navigation Overlay for ALL devices */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-16 right-0 h-full w-80 bg-slate-900 z-50 shadow-xl border-l border-slate-700"
            >
              <div className="py-8 px-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-sky-400 bg-slate-800 shadow-lg'
                        : 'text-slate-300 hover:text-sky-400 hover:bg-slate-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;