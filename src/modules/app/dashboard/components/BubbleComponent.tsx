import { useEffect, useState } from 'react';

const BubbleComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 240000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sm:order-none order-first h-14 w-14 sm:w-20 sm:ml-10 sm:h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 bubble fade-in">
      <svg viewBox="0 0 120 40" className="sm:w-20 sm:h-20 w-20 h-20">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: '#4e54c8', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#8f94fb', stopOpacity: 1 }}
            />
          </linearGradient>
          <filter id="f1">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
            <feOffset dx="2" dy="2" result="offsetblur" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="28"
          fontFamily="'Inter', sans-serif"
          fontWeight="bold"
          fill="url(#gradient)"
          filter="url(#f1)"
        >
          Hi!
        </text>
      </svg>

      <style>
        {`
          .bubble {
            animation: bounce 2s infinite; /* Slow down the bounce effect */
            position: relative; /* Allow positioning adjustments */
            transition: transform 0.5s ease; /* Smooth transition on hover */
          }
          .bubble:hover {
            animation: none; /* Stop bouncing on hover */
            transform: translateY(-10px); /* Keep the current hover position */
          }
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px); /* Adjust height of the bounce */
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .fade-in {
            animation: fade-in 2s forwards; /* Fade in effect over 2 seconds */
          }
        `}
      </style>
    </div>
  );
};

export default BubbleComponent;
