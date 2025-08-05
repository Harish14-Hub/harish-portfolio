import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(
        'bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 border border-gray-200 dark:border-gray-700 backdrop-blur-sm',
        className
      )}
    >
      {children}
    </motion.div>
  );
};