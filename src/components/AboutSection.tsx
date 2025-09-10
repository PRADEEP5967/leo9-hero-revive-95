import { motion } from 'framer-motion';
import { Palette, Code, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'Design',
      items: ['UI Design', 'UX Design', 'UX Consultancy', 'Design System', 'Animation', 'Illustrations']
    },
    {
      icon: Code,
      title: 'Technology', 
      items: ['Web Development', 'Softwares', 'Mobile Apps', 'Web Apps', 'Front-end', 'Back-end']
    },
    {
      icon: TrendingUp,
      title: 'Marketing',
      items: ['Branding', 'Brand Name', 'Brand Guidelines', 'Strategy', 'Digital Marketing', 'S.E.O.']
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-black dark:text-white mb-8 leading-tight">
            We are a global creative agency that combines design expertise with technology and intelligence.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <IconComponent className="w-8 h-8 text-white dark:text-black" />
                </motion.div>
                
                <h3 className="text-3xl font-black text-black dark:text-white mb-6">
                  {service.title}
                </h3>
                
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 5 }}
                      className="text-lg text-gray-600 dark:text-gray-400 font-medium"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl lg:text-3xl font-bold text-black dark:text-white leading-relaxed max-w-6xl mx-auto">
            As global leaders in UX UI, technology, and marketing solutions, we partner with clients to simplify, strengthen, and transform their businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;