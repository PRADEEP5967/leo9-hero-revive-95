import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import AnimatedDots from './AnimatedDots';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Design', 'Transform', 'Accelerate'];
  const { scrollY } = useScroll();
  
  const parallaxY = useTransform(scrollY, [0, 500], [0, -150]);
  const parallaxOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    const typeWriter = () => {
      const currentWord = words[currentWordIndex];
      let i = 0;
      
      const timer = setInterval(() => {
        setTypedText(currentWord.slice(0, i + 1));
        i++;
        
        if (i > currentWord.length) {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }, 1500);
        }
      }, 150);
      
      return () => clearInterval(timer);
    };
    
    const cleanup = typeWriter();
    return cleanup;
  }, [currentWordIndex]);

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900"
      style={{ y: parallaxY, opacity: parallaxOpacity }}
    >
      {/* Animated Background with Parallax */}
      <motion.div 
        className="absolute left-0 top-0 w-1/2 h-full"
        style={{ y: parallaxY }}
      >
        <AnimatedDots />
      </motion.div>

      {/* Interactive Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-gradient-to-br from-pink-400/20 to-red-400/20 blur-lg"
        animate={{ 
          scale: [1, 0.8, 1],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Empty space for animated dots background */}
          <div className="hidden lg:block" />
          
          {/* Right Side - Content */}
          <div className="text-left lg:text-left">
            {/* Dynamic Typing Headlines */}
            <div className="space-y-4 mb-8">
              {words.map((word, index) => (
                <motion.h1
                  key={word}
                  initial={{ opacity: 0, y: 100, rotateX: -15, scale: 0.8 }}
                  animate={{ 
                    opacity: currentWordIndex >= index ? 1 : 0.3, 
                    y: currentWordIndex >= index ? 0 : 50, 
                    rotateX: 0,
                    scale: currentWordIndex === index ? 1.05 : 1
                  }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.3, 
                    ease: [0.215, 0.61, 0.355, 1],
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [-1, 1, -1, 0],
                    transition: { duration: 0.5 }
                  }}
                  className={`text-6xl lg:text-8xl xl:text-9xl font-black leading-none cursor-pointer transition-all duration-500 ${
                    currentWordIndex === index 
                      ? 'text-black dark:text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                  style={{
                    textShadow: currentWordIndex === index ? '0 0 30px rgba(99, 102, 241, 0.3)' : 'none'
                  }}
                >
                  {currentWordIndex === index ? typedText : word}
                  {currentWordIndex === index && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-blue-500"
                    >
                      |
                    </motion.span>
                  )}
                </motion.h1>
              ))}
            </div>

            {/* Enhanced Subtitle with Interactive Elements */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.p 
                className="text-xl lg:text-2xl text-black dark:text-white font-medium leading-relaxed max-w-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Redefining user experiences through{' '}
                <motion.span 
                  className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 20px rgba(99, 102, 241, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Behavioural Science & AI
                </motion.span>
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <motion.span 
                  className="text-black dark:text-white font-bold"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#6366f1"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Your trusted UI UX design agency.
                </motion.span>
              </motion.p>

              {/* Interactive CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    y: -3
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="button-bg"
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    Watch Our Story
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-black dark:text-white cursor-pointer group"
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          const element = document.getElementById('clients');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.span 
          className="text-sm font-medium mb-3 uppercase tracking-wider group-hover:text-blue-500 transition-colors duration-300"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to Explore
        </motion.span>
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="p-3 border-2 border-black dark:border-white rounded-full group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm"
          whileHover={{ 
            rotate: 360,
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)"
          }}
        >
          <ChevronDown className="w-5 h-5 group-hover:text-blue-500 transition-colors duration-300" />
        </motion.div>

        {/* Scroll Trail Effect */}
        <motion.div
          className="absolute top-full mt-2 w-0.5 h-16 bg-gradient-to-b from-black/50 to-transparent dark:from-white/50"
          animate={{ 
            scaleY: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </motion.section>
  );
};

export default HeroSection;