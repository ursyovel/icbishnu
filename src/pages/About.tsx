import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, Instagram, Mail, Facebook } from 'lucide-react';

const About = () => {
  const fourWayTest = [
    {
      number: '1',
      title: 'Truth',
      description: 'Is it the TRUTH?',
      color: 'from-red-400 to-red-500'
    },
    {
      number: '2',
      title: 'Fairness',
      description: 'Is it FAIR to all concerned?',
      color: 'from-blue-400 to-blue-500'
    },
    {
      number: '3',
      title: 'Goodwill',
      description: 'Will it build GOODWILL and BETTER FRIENDSHIPS?',
      color: 'from-green-400 to-green-500'
    },
    {
      number: '4',
      title: 'Benefit',
      description: 'Will it be BENEFICIAL to all concerned?',
      color: 'from-purple-400 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">About Our Club</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The Interact Club of Bishnu Memorial is a dynamic community of young leaders 
            dedicated to service, friendship, and positive change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-slate-700 mb-6">About Our Club</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                The Interact Club of Bishnu Memorial operates under the sponsorship of the 
                Rotary Club of Dharan Ghopa in District 3292. We are committed to service, 
                leadership development, and community engagement.
              </p>
              <p>
                Through our "Power In Action" theme, we demonstrate that real power comes 
                through meaningful actions and service to our community. We work on projects 
                that create lasting positive impact.
              </p>
              <p>
                Our members develop leadership skills, build lasting friendships, and gain 
                valuable experience while making a difference in the lives of others.
              </p>
            </div>
          </motion.div>

          {/* Four-Way Test */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-sky-100"
          >
            <h3 className="text-2xl font-bold text-slate-700 mb-6 text-center">The Four-Way Test</h3>
            <div className="space-y-4">
              {fourWayTest.map((test, index) => (
                <motion.div
                  key={test.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100"
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${test.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-white font-bold text-sm">{test.number}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-1">{test.title}</h4>
                    <p className="text-sm text-slate-600">{test.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect With Us
            </h2>
            <p className="text-xl text-sky-100 mb-8">
              Follow our journey and stay updated with our latest activities
            </p>
            
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.instagram.com/ic_bishnu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/30 transition-all duration-200 group-hover:scale-110">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium">@ic_bishnu</span>
              </a>
              
              <a
                href="mailto:contact@icbishnu.org"
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/30 transition-all duration-200 group-hover:scale-110">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium">Email Us</span>
              </a>
              
              <a
                href="https://www.facebook.com/icbishnu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/30 transition-all duration-200 group-hover:scale-110">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium">Facebook</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100"
            >
              <Users className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-700 mb-3">Our Mission</h3>
              <p className="text-slate-600">
                To provide opportunities for young people to enhance their knowledge and skills 
                that will assist them in personal development and service to their community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100"
            >
              <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-700 mb-3">Our Vision</h3>
              <p className="text-slate-600">
                To be recognized as a premier youth service organization that develops 
                responsible leaders and creates positive change in our community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100"
            >
              <Heart className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-700 mb-3">Our Values</h3>
              <p className="text-slate-600">
                Service above self, integrity, leadership, fellowship, and diversity. 
                These values guide everything we do and every project we undertake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;