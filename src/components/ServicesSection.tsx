import { motion } from 'framer-motion';
import { Palette, Users, Search, Layers, Zap, BarChart } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create intuitive and visually appealing user interfaces that enhance user experience and drive engagement.'
    },
    {
      icon: Users,
      title: 'User Research',
      description: 'Deep dive into user behavior and preferences to inform design decisions and improve user satisfaction.'
    },
    {
      icon: Search,
      title: 'Product Strategy',
      description: 'Develop comprehensive product strategies that align with business goals and user needs.'
    },
    {
      icon: Layers,
      title: 'Design Systems',
      description: 'Build scalable design systems that ensure consistency across all product touchpoints.'
    },
    {
      icon: Zap,
      title: 'Prototyping',
      description: 'Rapid prototyping to test ideas quickly and iterate based on user feedback.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Optimization',
      description: 'Data-driven approach to optimize user experiences and improve conversion rates.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-black dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We offer comprehensive design solutions powered by behavioral science and AI to transform your digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-black dark:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;