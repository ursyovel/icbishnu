import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Mail, Phone, Instagram } from 'lucide-react';

const Board = () => {
  const boardMembers = [
    // IPP at top
    { 
      name: 'Itr. Saanvi Agrawal', 
      position: 'Immediate Past President', 
      facebook: '#', 
      email: 'saanvi@example.com', 
      phone: '+977-9800000001', 
      instagram: '@saanvi_agrawal' 
    },
    
    // 2 below IPP
    { 
      name: 'Itr. Mingsang Limbu', 
      position: 'President', 
      facebook: '#', 
      email: 'mingsang@example.com', 
      phone: '+977-9800000002', 
      instagram: '@mingsang_limbu' 
    },
    { 
      name: 'Itr. Saisma Shrestha', 
      position: 'Vice President', 
      facebook: '#', 
      email: 'saisma@example.com', 
      phone: '+977-9800000003', 
      instagram: '@saisma_shrestha' 
    },
    
    // 4 below
    { 
      name: 'Itr. Sambhav Baral', 
      position: 'Secretary', 
      facebook: '#', 
      email: 'sambhav@example.com', 
      phone: '+977-9800000004', 
      instagram: '@sambhav_baral' 
    },
    { 
      name: 'Itr. Piyush Katwal', 
      position: 'Sergeant At Arms', 
      facebook: '#', 
      email: 'piyush@example.com', 
      phone: '+977-9800000005', 
      instagram: '@piyush_katwal' 
    },
    { 
      name: 'Itr. Sujal Lamsal', 
      position: 'Treasurer', 
      facebook: '#', 
      email: 'sujal@example.com', 
      phone: '+977-9800000006', 
      instagram: '@sujal_lamsal' 
    },
    { 
      name: 'Itr. Stella Shrestha', 
      position: 'IT Head', 
      facebook: '#', 
      email: 'stella@example.com', 
      phone: '+977-9800000007', 
      instagram: '@stella_shrestha' 
    },
    
    // Remaining members
    { 
      name: 'Itr. Swekcha Rai', 
      position: 'CSD', 
      facebook: '#', 
      email: 'swekcha@example.com', 
      phone: '+977-9800000008', 
      instagram: '@swekcha_rai' 
    },
    { 
      name: 'Itr. Abhinandan Sharma Dahal', 
      position: 'COSD', 
      facebook: '#', 
      email: 'abhinandan@example.com', 
      phone: '+977-9800000009', 
      instagram: '@abhinandan_dahal' 
    },
    { 
      name: 'Itr. Salomi Limbu', 
      position: 'ISD', 
      facebook: '#', 
      email: 'salomi@example.com', 
      phone: '+977-9800000010', 
      instagram: '@salomi_limbu' 
    },
    { 
      name: 'Itr. Swikrkitri Pu', 
      position: 'PRO', 
      facebook: '#', 
      email: 'swikrkitri@example.com', 
      phone: '+977-9800000011', 
      instagram: '@swikrkitri_pu' 
    },
    { 
      name: 'Itr. Saphal Karki', 
      position: 'PDD', 
      facebook: '#', 
      email: 'saphal@example.com', 
      phone: '+977-9800000012', 
      instagram: '@saphal_karki' 
    },
  ];

  const renderBoardMemberGrid = () => {
    const layouts = [
      { start: 0, count: 1, cols: 'grid-cols-1', justify: 'justify-center', maxWidth: 'max-w-xs' }, // IPP
      { start: 1, count: 2, cols: 'grid-cols-1 md:grid-cols-2', justify: 'justify-center', maxWidth: 'max-w-sm' }, // President, VP
      { start: 3, count: 4, cols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4', justify: 'justify-center', maxWidth: 'max-w-sm' }, // Next 4
      { start: 7, count: 5, cols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5', justify: 'justify-center', maxWidth: 'max-w-sm' }, // Remaining 5
    ];

    return layouts.map((layout, layoutIndex) => (
      <div key={layoutIndex} className={`grid ${layout.cols} gap-8 ${layout.justify} mb-12`}>
        {boardMembers.slice(layout.start, layout.start + layout.count).map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (layout.start + index) * 0.05 }}
            className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 group border border-sky-100 ${layout.maxWidth} mx-auto w-full`}
          >
            <div className="w-36 h-36 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200 shadow-lg ring-2 ring-sky-200">
              <span className="text-gray-500 text-xs">Photo</span>
            </div>
            <h3 className="font-bold text-slate-700 mb-3 text-center text-base">{member.name}</h3>
            <p className="text-sm text-slate-500 font-medium text-center mb-6">{member.position}</p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4">
              <a href={member.facebook} className="text-blue-600 hover:text-blue-700 transition-colors p-2 hover:bg-blue-50 rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={`mailto:${member.email}`} className="text-red-500 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-full">
                <Mail className="w-5 h-5" />
              </a>
              <a href={`tel:${member.phone}`} className="text-green-500 hover:text-green-600 transition-colors p-2 hover:bg-green-50 rounded-full">
                <Phone className="w-5 h-5" />
              </a>
              <a href={`https://instagram.com/${member.instagram.replace('@', '')}`} className="text-pink-500 hover:text-pink-600 transition-colors p-2 hover:bg-pink-50 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    ));
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Board Members */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">Our Board Members</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the dedicated leaders who guide our club towards excellence and impact.
          </p>
        </motion.div>

        {renderBoardMemberGrid()}
      </section>
    </div>
  );
};

export default Board;