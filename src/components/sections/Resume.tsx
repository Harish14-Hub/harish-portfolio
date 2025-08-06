import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Award, Briefcase } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Resume: React.FC = () => {
  const handleDownload = () => {
    // In a real application, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '/HARISH P _resume data engineer.pdf'; // Replace with actual PDF URL
    link.download = 'HARISH P _resume data engineer.pdf';
    link.click();
  };

  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Basic Experience on Projects',
      description: 'Mean stack and Data analystics'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certified on MERN-stack and Data analyst',
      description: 'NOVITECH pvt, Coimbatore'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: '5+ Projects',
      description: 'During my college days'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Download My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Overview of my experience, skills, and achievements...
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {highlights.map((highlight, index) => (
              <Card key={highlight.title} className="p-6 text-center" hover={false}>
                <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <Card className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Harish-Portfolio
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Complete professional resume including experience, education, certifications, and portfolio...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['PDF Format', 'Updated 2025', 'ATS Friendly'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button
                    onClick={handleDownload}
                    size="lg"
                    className="flex items-center gap-3 px-8 py-4 text-lg"
                  >
                    <Download size={24} />
                    Download Resume
                  </Button>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  What's Inside?
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Professional Experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Technical Skills & Certifications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Education & Training
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Key Project Highlights
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Quick Facts
                </h4>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Experience:</span>
                    <span className="font-medium">5+ project</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Specialization:</span>
                    <span className="font-medium">Data analystics and Full-stack</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-medium">Tirupur, coimbatore</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">Open</span>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};