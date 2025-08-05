import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X } from 'lucide-react';
import { projects, Project } from '../../data/projects';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { LazyImage } from '../common/LazyImage';
import { AnimatedSection } from '../common/AnimatedSection';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Project['category'] | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { key: 'all' as const, label: 'Projects', color: 'from-gray-500 to-gray-600' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <LazyImage
            src={project.image}
            alt={project.title}
            className="w-full h-64 rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            {project.longDescription}
          </p>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-600 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              onClick={() => window.open(project.github, '_blank')}
              className="flex items-center gap-2"
            >
              <Github size={16} />
              View Code
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A showcase of innovative solutions
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                delay={index * 0.1}
              >
                <motion.div
                  layout
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative group">
                      <LazyImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => window.open(project.github, '_blank')}
                            className="flex items-center gap-1"
                          >
                            <Github size={14} />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      <Button
                        variant="outline"
                        onClick={() => setSelectedProject(project)}
                        className="w-full"
                      >
                        Learn More
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            onClick={() => window.open('https://github.com', '_blank')}
            className="px-8 py-3"
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
      </section>
  );
}