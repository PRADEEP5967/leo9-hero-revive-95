import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FooterCTA = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black mb-8 leading-tight"
          >
            Let's create a measurable impact on your business.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold rounded-full inline-flex items-center gap-3"
              >
                Design A Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg lg:text-xl leading-relaxed max-w-6xl mx-auto text-gray-300">
              We're a UI/UX design agency that has helped businesses scale by transforming complex challenges into intuitive digital experiences. 
              With a broad spectrum of services, we design solutions that adhere to the highest industry standards and deliver on time. 
              Focused on neuroscience and human behavior, our UI UX designs optimize usability, engagement, and business results. 
              By emphasizing both function and form, we design digital experiences that come naturally, work seamlessly, and create lasting results.
            </p>
            
            <p className="text-lg lg:text-xl leading-relaxed max-w-6xl mx-auto text-gray-300">
              Great design isn't just about looks, it's about function, flow, and foresight. As a UI UX agency, we blend behavioural science, 
              design thinking, and technology to craft experiences that feel effortless yet powerful. A leading UI UX studio and UI UX agency in India, 
              we redefine how users interact with technology. Some say we're the best UI UX design agency because our work drives engagement, 
              innovation, and lasting impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;