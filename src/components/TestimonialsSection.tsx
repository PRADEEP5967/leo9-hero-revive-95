import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Pradeep Kumaar',
      position: 'C.E.O. - StanVentures',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/pradeep-kumaar.webp',
      quote: 'The way they think from a user\'s point of view is impressive. Great designers and will take your project as their own company project to deliver best Designs from Day One!',
      rating: 5
    },
    {
      name: 'Kamlesh Dixit',
      position: 'Management Consultant - Deloitte',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/kamlesh-dixit.jpg',
      quote: 'Leo9 Studio is a reliable, tech savvy and creative group to work with. Their creative insights, combined with superb technical capabilities make them a great team. I would recommend Leo9 team without hesitation.',
      rating: 5
    },
    {
      name: 'Amit Singh',
      position: 'C.E.O. - Investica',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/amit-singh.jpg',
      quote: 'Leo9 Studio is one of the few Design agencies that understand the financial services industry\'s inner workings. They\'re an incredible agency that "knows it". The team Leo9 is killing it and bringing UI/UX Designs to the forefront of a whole industry\'s digital transformation.',
      rating: 5
    },
    {
      name: 'Robb Fahrion',
      position: 'C.E.O. - FVG',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/client-rob.jpg',
      quote: 'Team Leo9 works tirelessly to get deliverables to meet all client needs. Their organization should be trusted because they\'ve continued to deliver quality over and over again.',
      rating: 5
    },
    {
      name: 'Yevgen Sokolnikov',
      position: 'C.E.O. - boodmo.com',
      image: 'https://leo9design.blr1.cdn.digitaloceanspaces.com/img/yevgen-sokolnikov.webp',
      quote: 'Thanks to Leo9 Studio\'s work, the website\'s long checkout time has been cut down to one minute helping the client increase its business.',
      rating: 5
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
          <h2 className="text-2xl font-light text-gray-600 dark:text-gray-400 mb-4 tracking-wider">
            What Clients say
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6">
                <Quote className="w-8 h-8 text-gray-300 dark:text-gray-600" />
              </div>

              {/* Client Photo */}
              <div className="flex items-center mb-6">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-black dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;