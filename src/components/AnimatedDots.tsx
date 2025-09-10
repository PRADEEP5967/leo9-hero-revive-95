import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

const AnimatedDots = () => {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots: Dot[] = [];
      for (let i = 0; i < 80; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 3,
          opacity: Math.random() * 0.4 + 0.1,
          color: `hsl(0, 0%, ${Math.random() * 30 + 10}%)`
        });
      }
      setDots(newDots);
    };

    generateDots();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative w-full h-full overflow-hidden"
    >
      {/* Main animated dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full"
          initial={{
            x: `${dot.x}%`,
            y: `${dot.y}%`,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 0.7, 1],
            opacity: [0, dot.opacity, dot.opacity * 0.5, dot.opacity],
            y: [`${dot.y}%`, `${dot.y - 30}%`, `${dot.y + 15}%`, `${dot.y}%`],
            x: [`${dot.x}%`, `${dot.x + 5}%`, `${dot.x - 5}%`, `${dot.x}%`],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
          }}
        />
      ))}
      
      {/* Large floating elements - match Leo9's style */}
      <motion.div
        className="absolute top-20 left-20 w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full opacity-30"
        animate={{
          y: [-20, 30, -20],
          x: [-10, 15, -10],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 left-1/3 w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full opacity-20"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full opacity-25"
        animate={{
          y: [0, -40, 0],
          x: [0, -25, 0],
          scale: [1, 0.9, 1],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Small accent dots */}
      <motion.div
        className="absolute top-3/4 left-1/2 w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full opacity-40"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full opacity-30"
        animate={{
          scale: [0.8, 1.3, 0.8],
          rotate: [0, 360],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </motion.div>
  );
};

export default AnimatedDots;