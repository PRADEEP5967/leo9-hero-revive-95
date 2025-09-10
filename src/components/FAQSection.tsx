import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      category: 'UI/UX Design Company',
      question: 'What are your areas of focus as a leading UI/UX design company in India?',
      answer: 'We specialize in user research, interaction design, usability testing, and digital product strategy. From mobile applications to enterprise platforms, our solutions combine human neuroscience, psychology, technology, and design thinking to develop intuitive, high-performing experiences.'
    },
    {
      category: 'UI/UX Design Process',
      question: 'What separates Leo9 Studio from other top UI/UX design agencies?',
      answer: 'We don\'t just build, we interpret user behavior and predict needs. Our approach combines strategic thinking with creative imagination, and we are not just a service provider but problem solvers who think outside the box.'
    },
    {
      category: 'UI/UX Design Service',
      question: 'Does Leo9 Studio have experience working with large corporate organisations in UX/UI design?',
      answer: 'Yes, we\'ve collaborated with global enterprises to optimise digital platforms, improve workflows, and enhance customer experiences through UX-driven innovation.'
    },
    {
      category: 'UX/UI Design – Web & Mobile',
      question: 'Does Leo9 Studio work with startups in UX/UI design?',
      answer: 'Yes, we assist startups in converting concepts into scalable and user-friendly products. Our methods ensure lean and iterative design, which grows and adapts in sync with business development.'
    },
    {
      category: 'UI/UX Design Company',
      question: 'Why should we onboard Leo9 Studio? What\'s special about you?',
      answer: 'We create experiences that resonate. Our blend of behavioural psychology, strategic thinking, and design innovation makes us a partner in problem-solving, not just another UI UX agency but an extension of your vision.'
    },
    {
      category: 'UI/UX Design Process',
      question: 'Is UX research important for product design?',
      answer: 'It\'s critical. Design without research is guesswork. UX research confirms assumptions, discovers pain points, and makes sure the product is created for actual user needs, not aesthetics.'
    }
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
          <h2 className="text-5xl lg:text-6xl font-black text-black dark:text-white mb-6">
            FAQ's
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="flex-1">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium block mb-2">
                    {faq.category}
                  </span>
                  <h3 className="text-lg lg:text-xl font-bold text-black dark:text-white">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4"
                >
                  {openFAQ === index ? (
                    <Minus className="w-6 h-6 text-black dark:text-white" />
                  ) : (
                    <Plus className="w-6 h-6 text-black dark:text-white" />
                  )}
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === index ? 'auto' : 0,
                  opacity: openFAQ === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;