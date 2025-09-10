import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Design', 'Transform', 'Accelerate'];
  const { scrollY } = useScroll();
  
  const parallaxY = useTransform(scrollY, [0, 500], [0, -100]);

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
          }, 2000);
        }
      }, 100);
      
      return () => clearInterval(timer);
    };
    
    const cleanup = typeWriter();
    return cleanup;
  }, [currentWordIndex]);

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      style={{ y: parallaxY }}
    >
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black leading-none mb-4">
              <span className="text-foreground">We </span>
              <span className="gradient-text">
                {currentWordIndex === 0 ? typedText : words[currentWordIndex]}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-primary"
                >
                  |
                </motion.span>
              </span>
              <br />
              <span className="text-foreground">Digital</span>
            </h1>
          </motion.div>
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Redefining user experiences through{' '}
            <span className="gradient-text font-semibold">
              Behavioural Science & AI
            </span>
            <br />
            <span className="text-foreground font-medium">Your trusted UI UX design agency.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "var(--shadow-glow)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-lift relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Play className="w-5 h-5" />
                Watch Our Story
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group glass-effect px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-lift"
            >
              <span className="flex items-center gap-3">
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          const element = document.getElementById('clients');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.span 
          className="text-sm font-medium mb-3 uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-300"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to Explore
        </motion.span>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-3 border border-muted-foreground rounded-full group-hover:border-primary glass-effect transition-all duration-300"
        >
          <ChevronDown className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;