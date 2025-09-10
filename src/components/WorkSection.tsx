import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WorkSection = () => {
  const projects = [
    {
      title: 'RIGI',
      description: 'Innovated Community Empowerment Website',
      services: ['UX-UI', 'Web', 'Mobile'],
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/case-study/rigi/rigi_ux_ui_dev_consultant_leo9_studio_home.webp',
      link: '#'
    },
    {
      title: 'BMW',
      description: 'Optimized the effortless on-the-go lifestyle',
      services: ['UX-UI', 'Web', 'Mobile'],
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/bmw_ux_consultant_leo9_studio_home.png',
      link: '#'
    },
    {
      title: 'Nirmal Bang',
      description: 'Engineered Investment Experience',
      services: ['UX-UI', 'Mobile'],
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/niramal_bang_ux_consultant_leo9_studio_home.png',
      link: '#'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Project Info */}
              <div className="flex-1 space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl lg:text-5xl font-black text-black dark:text-white"
                >
                  {project.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {project.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {service}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;