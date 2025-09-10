import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, user needs, and market landscape through comprehensive research.',
      color: 'bg-blue-500'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Develop a clear roadmap and design strategy aligned with your objectives and user expectations.',
      color: 'bg-purple-500'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Create innovative designs that balance aesthetics with functionality, ensuring optimal user experience.',
      color: 'bg-pink-500'
    },
    {
      number: '04',
      title: 'Prototype',
      description: 'Build interactive prototypes to test concepts and gather feedback before development begins.',
      color: 'bg-orange-500'
    },
    {
      number: '05',
      title: 'Launch',
      description: 'Support the development process and ensure successful product launch with ongoing optimization.',
      color: 'bg-green-500'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-black dark:text-white mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A proven methodology that combines design thinking with behavioral science to deliver exceptional results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {step.number}
                    </div>
                    <h3 className="text-3xl font-black text-black dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center relative overflow-hidden"
                  >
                    <div className={`w-32 h-32 ${step.color} rounded-full opacity-20`} />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-4 border-dashed border-gray-300 dark:border-gray-600 rounded-3xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 -translate-x-1/2 hidden lg:block" />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;