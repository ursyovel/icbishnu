import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white py-24 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Power In Action Banner */}
          <div className="border-4 border-cyan-400 rounded-3xl p-8 mb-16 bg-black/40 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-center gap-8">
              {/* Logo Placeholder */}
              <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden ring-4 ring-cyan-400/50">
                <img 
                  src="/images/logo.png" 
                  alt="Power In Action Logo" 
                  className="w-full h-full object-contain p-6"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex-1 max-w-2xl">
                <h1 className="text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Power In Action</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed mb-12">
                  is a presidential theme for the Interact Club of Bishnu Memorial for the rota year 2025-2026 set by Itr. Mingsang Limbu. The sentence "Power In Action" is self explanatory which also states that real power is shown through actions, not just words or positions.
                </p>
              </div>
            </div>
          </div>

          {/* Message from President Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-16 text-white mt-8">
              Message from the President
            </h2>
          </motion.div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-sky-100"
          >
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
              <p className="text-xl mb-6">
                Welcome to the Interact Club of Bishnu Memorial!
              </p>
              <p className="mb-4">
                This year, our motto is <span className="font-bold text-sky-600">"Power In Action,"</span> and it truly captures the spirit that drives us every day. We believe that when young people come together with passion, energy, and a heart for service, incredible things happen. Our club is more than just a group — we are a force for positive change in our community and beyond.
              </p>
              <p className="mb-4">
                Join us as we put our power into action through meaningful projects, leadership opportunities, and friendships that inspire. Together, we're making a difference — one step, one smile, and one act of kindness at a time.
              </p>
              <p className="text-lg font-semibold text-slate-700">
                Let's turn energy into impact!
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-sky-100">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Itr. Mingsang Limbu</p>
                  <p className="text-slate-500">President, Interact Club of Bishnu Memorial</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn More About Our Work
            </h2>
            <p className="text-xl text-sky-100 mb-8">
              Discover our projects and see how we're making a difference in our community.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 hover:shadow-lg transition-all duration-200 group"
            >
              View Our Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;