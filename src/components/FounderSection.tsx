import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const FounderSection = () => {
  const awards = [
    'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/aw1.svg',
    'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/aw2.svg',
    'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/aw3.svg'
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-light text-gray-600 dark:text-gray-400 mb-4 tracking-wider">
            Meet the Founder
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://leo9design.blr1.cdn.digitaloceanspaces.com/img/jugal_web_application_leo9_studio.png"
                alt="Jugal Shah"
                className="w-80 h-80 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-black dark:bg-white rounded-full p-4">
                <motion.a
                  href="https://in.linkedin.com/in/shahjugal"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="block"
                >
                  <Linkedin className="w-6 h-6 text-white dark:text-black" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Founder Info */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-black dark:text-white mb-6"
            >
              Jugal Shah
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                Founder, Head of UX at Leo9 Studio.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Behavioral science and Neuromarketing expert.
              </p>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start gap-6"
            >
              {awards.map((award, index) => (
                <motion.img
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  src={award}
                  alt={`Award ${index + 1}`}
                  className="w-16 h-16 object-contain"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;