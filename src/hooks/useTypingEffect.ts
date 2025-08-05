import { useState, useEffect } from 'react';

export const useTypingEffect = (
  text: string,
  speed: number = 100,
  startDelay: number = 0
) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = () => {
      let currentIndex = 0;
      
      const typeNextCharacter = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeNextCharacter, speed);
        } else {
          setIsComplete(true);
        }
      };
      
      typeNextCharacter();
    };

    if (startDelay > 0) {
      timeoutId = setTimeout(startTyping, startDelay);
    } else {
      startTyping();
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
};