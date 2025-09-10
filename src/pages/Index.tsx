import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ClientLogos from '@/components/ClientLogos';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import StatsSection from '@/components/StatsSection';
import FounderSection from '@/components/FounderSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import FooterCTA from '@/components/FooterCTA';
import InteractiveBackground from '@/components/InteractiveBackground';
import ScrollProgressBar from '@/components/ScrollProgressBar';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  useEffect(() => {
    // Simulate loading time and check for saved theme
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  if (loading) {
    return (
      <motion.div 
        className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
           <motion.h2 
            className="text-2xl font-bold text-black dark:text-white"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Pradeep Studio
          </motion.h2>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen bg-white dark:bg-gray-900 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ScrollProgressBar />
        <InteractiveBackground />
        <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeroSection />
        </motion.div>
        
        <motion.div id="clients">
          <ClientLogos />
        </motion.div>
        
        <motion.div id="about">
          <AboutSection />
        </motion.div>
        
        <motion.div id="work">
          <WorkSection />
        </motion.div>
        
        <StatsSection />
        <FounderSection />
        <TestimonialsSection />
        <ServicesSection />
        <ProcessSection />
        
        <motion.div id="knowledge">
          <FAQSection />
        </motion.div>
        
        <motion.div id="contact">
          <FooterCTA />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;