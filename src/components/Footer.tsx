import React from 'react';
import { Instagram, Mail, MapPin, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden ring-2 ring-sky-400/30">
                <img 
                  src="/images/logo.png" 
                  alt="Power In Action Logo" 
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Interact Club</h3>
                <p className="text-sm text-slate-300">Bishnu Memorial</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Sponsored by Rotary Club of Dharan Ghopa, District 3292. 
              Empowering youth to make a positive impact in our community.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-sky-400" />
                <span className="text-sm text-slate-300">District 3292</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-400" />
                <span className="text-sm text-slate-300">contact@icbishnu.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-sky-400" />
                <a 
                  href="https://www.instagram.com/ic_bishnu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  @ic_bishnu
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-sm text-slate-300 hover:text-white transition-colors">About Us</a>
              <a href="/projects" className="block text-sm text-slate-300 hover:text-white transition-colors">Our Projects</a>
              <a href="/board" className="block text-sm text-slate-300 hover:text-white transition-colors">Board Members</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-300">
            © 2025 Interact Club of Bishnu Memorial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;