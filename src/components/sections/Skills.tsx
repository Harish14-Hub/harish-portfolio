import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, getSkillsByCategory, Skill } from '../../data/skills';
import { ProgressBar } from '../common/ProgressBar';
import { AnimatedSection } from '../common/AnimatedSection';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Skill['category']>('frontend');
  
  const categories = [
    { key: 'frontend' as const, label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { key: 'backend' as const, label: 'Backend', color: 'from-purple-500 to-pink-500' },
    { key: 'tools' as const, label: 'Tools & DB', color: 'from-green-500 to-emerald-500' },
    { key: 'other' as const, label: 'Other', color: 'from-orange-500 to-red-500' }
  ];

  const activeSkills = getSkillsByCategory(activeCategory);
  const activeColor = categories.find(cat => cat.key === activeCategory)?.color || 'from-blue-500 to-cyan-500';

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Category Tabs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeSkills.map((skill, index) => (
              <AnimatedSection
                key={skill.name}
                delay={index * 0.1}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <motion.div whileHover={{ scale: 1.03 }}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {skill.name}
                  </h3>
                  <ProgressBar
                    value={skill.level}
                    color={activeColor}
                    delay={index * 0.1 + 0.3}
                    showValue={true}
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: 'Project Experience', value: '8+' },
              { label: 'Technologies Mastered', value: '7+' },
              { label: 'Projects Completed', value: '5+' },
              { label: 'certificate completion count', value: '40+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg"
              >
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${activeColor} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};