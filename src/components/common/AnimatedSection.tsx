import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up'
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 60, x: 0 };
      case 'down': return { y: -60, x: 0 };
      case 'left': return { x: -60, y: 0 };
      case 'right': return { x: 60, y: 0 };
      default: return { y: 60, x: 0 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition()
  };

  const animate = {
    opacity: isIntersecting ? 1 : 0,
    x: isIntersecting ? 0 : getInitialPosition().x,
    y: isIntersecting ? 0 : getInitialPosition().y
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};