import { motion } from 'framer-motion';

const ClientLogos = () => {
  const clients = [
    { name: 'KPIT', logo: 'KPIT' },
    { name: 'TATA', logo: 'TATA' },
    { name: 'BMW', logo: 'BMW' },
    { name: 'SONY', logo: 'SONY' },
    { name: 'Huggies', logo: 'Huggies' },
    { name: 'ETON', logo: 'ETON' },
    { name: 'KIMIRICA', logo: 'KIMIRICA' },
    { name: 'INDIUM', logo: 'INDIUM' },
    { name: 'Choice', logo: 'Choice' },
    { name: 'Star', logo: '★ Star' }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left side - Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <p className="text-lg font-medium text-black dark:text-white">
              Your trusted UI UX design agency.
            </p>
          </motion.div>

          {/* Right side - Client logos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-8 overflow-x-auto scrollbar-hide"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <span className="text-sm font-semibold whitespace-nowrap">
                  {client.logo}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;