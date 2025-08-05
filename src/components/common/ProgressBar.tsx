import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  color?: string;
  showValue?: boolean;
  animated?: boolean;
  duration?: number;
  delay?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  className = '',
  color = 'from-blue-500 to-purple-500',
  showValue = true,
  animated = true,
  duration = 1,
  delay = 0
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: true
  });

  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div ref={ref} className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        {showValue && (
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {value}%
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{
            width: animated && isIntersecting ? `${percentage}%` : `${percentage}%`
          }}
          transition={{
            duration: animated ? duration : 0,
            delay: animated ? delay : 0,
            ease: "easeOut"
          }}
        />
      </div>
    </div>
  );
};