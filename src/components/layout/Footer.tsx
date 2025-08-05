import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              &lt;MERN-stack Developer & Data Enthusiast&gt;
            </motion.div>
            <p className="text-gray-400 mb-4">
              Crafting digital solutions with passion and precision.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'GitHub', href: 'https://github.com/Harish1405' },
                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/harish-p-30975126a' },
                { name: 'Twitter', href: 'https://twitter.com' }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>harishpalanisamy14@gmail.com</p>
              <p>+91 8344606549</p>
              <p>Tirupur, Tamil Nadu</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Harish P. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>,</span>
              <Code className="w-4 h-4 text-blue-400 mx-1" />
              <span>, and</span>
              <Coffee className="w-4 h-4 text-yellow-600 mx-1" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
