import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Database, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { TypewriterText } from '../common/TypewriterText';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full"
            >
              <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full"
            >
              <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full"
            >
              <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold"
          >
            <span className="block text-gray-900 dark:text-white mb-2">
              Hi, I'm
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              <TypewriterText 
                text="Harish P" 
                speed={150} 
                startDelay={1000}
                showCursor={false}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            <TypewriterText 
              text="Specializing in Python and JavaScript (MERN-stack) & Data Analyst, I build scalable web applications, and data-driven platforms that deliver real-world impact. Experienced in backend systems, API integration, and intelligent data pipelines."
              speed={50}
              startDelay={2500}
              showCursor={false}
            />
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="px-8 py-4 text-lg"
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-lg"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="pt-8"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowDown size={32} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};