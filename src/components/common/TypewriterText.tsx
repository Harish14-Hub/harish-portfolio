import React from 'react';
import { motion } from 'framer-motion';
import { useTypingEffect } from '../../hooks/useTypingEffect';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCursor?: boolean;
  cursorClassName?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  startDelay = 0,
  className = '',
  showCursor = true,
  cursorClassName = 'text-blue-500'
}) => {
  const { displayText, isComplete } = useTypingEffect(text, speed, startDelay);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <motion.span
          className={`inline-block ${cursorClassName}`}
          animate={{ opacity: isComplete ? 0 : [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: isComplete ? 0 : Infinity,
            repeatType: "reverse"
          }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};