import { useEffect, useState } from 'react';

export const GetWindowSize: () => { width: number; height: number } = () => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const checkIsMobile = (triggerValue = 768): boolean => {
  const { width } = GetWindowSize();

  return width <= triggerValue;
};
