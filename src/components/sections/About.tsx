import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Heart, Zap } from 'lucide-react';
import { Card } from '../ui/Card';
import { LazyImage } from '../common/LazyImage';
import { AnimatedSection } from '../common/AnimatedSection';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Curiosity-Driven',
      description: 'Always exploring full stack development, data engineering, and AI-powered innovations.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Goal-Oriented',
      description: 'Delivering scalable and efficient solutions aligned with user and business needs.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passionate',
      description: 'Deeply committed to building impactful digital experiences using modern technologies.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Resilient',
      description: 'Adaptable and persistent when tackling technical challenges and evolving tech landscapes.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image and stats */}
          <AnimatedSection direction="left" className="space-y-8">
            <div className="relative">
              <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="relative overflow-hidden rounded-2xl">
                <LazyImage
                src="/harishpic.jpg"
                alt="Harish P"
                className="w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '8+', label: 'Projects' },
                { number: '1+', label: 'Years' },
                { number: '7+', label: 'Technologies' }
              ].map((stat, index) => (
                <AnimatedSection
                  key={stat.label}
                  delay={index * 0.1}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Right side - Content */}
          <AnimatedSection direction="right" className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Building Real-World Software and 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Passion & Purpose</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Hi, I'm Harish P — an aspiring Mern Stack Developer and Data Engineer with experience in React, Node.js,
                  Python, and AI tools. My interest in coding began with a desire to bring ideas to life through technology.
                </p>
                <p>
                  I’ve developed systems ranging from hospital management to AI drug analysis and space debris tracking. My
                  skill set bridges intuitive UI design with robust backend systems and meaningful data insights.
                </p>
                <p>
                  I believe in software that doesn’t just function—but empowers users, supports decision-making, and scales
                  with real-world demands.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <AnimatedSection
                  key={value.title}
                  delay={index * 0.1}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <div className="text-blue-600 dark:text-blue-400 mb-2">{value.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </motion.div>
      </div>
    </section>
  );
};