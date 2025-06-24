import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Solutions',
      role: 'CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'BeingRambo transformed our online presence completely. Their React-based website not only looks amazing but also increased our conversion rate by 150%. The team is professional, creative, and delivers on time.',
      rating: 5,
      project: 'E-commerce Website',
    },
    {
      name: 'Michael Chen',
      company: 'FoodieDelight',
      role: 'Founder',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The mobile app they developed for our restaurant has been a game-changer. Orders increased by 200% within the first month. Their attention to detail and user experience is outstanding.',
      rating: 5,
      project: 'Mobile App Development',
    },
    {
      name: 'Emily Rodriguez',
      company: 'GreenEarth Marketing',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Their digital marketing expertise helped us achieve a 300% ROI on our campaigns. The SEO strategies they implemented got us to the first page of Google within 3 months.',
      rating: 5,
      project: 'Digital Marketing',
    },
    {
      name: 'David Park',
      company: 'InnovateCorp',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Working with CosmicTech was an absolute pleasure. They delivered a complex SaaS platform ahead of schedule and within budget. Their technical expertise is unmatched.',
      rating: 5,
      project: 'SaaS Platform',
    },
    {
      name: 'Lisa Thompson',
      company: 'CreativeStudio',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The branding package they created for us perfectly captured our vision. The logo design and brand guidelines have helped us establish a strong market presence.',
      rating: 5,
      project: 'Brand Identity',
    },
    {
      name: 'James Wilson',
      company: 'HealthTech Innovations',
      role: 'Product Manager',
      image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Their video production team created compelling promotional content that increased our engagement by 400%. The quality and creativity exceeded our expectations.',
      rating: 5,
      project: 'Video Production',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
              whileHover={{ y: -5 }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-purple-200 dark:text-purple-800" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                "{testimonial.content}"
              </p>

              <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">
                {testimonial.project}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '100+', label: 'Happy Clients' },
            { number: '200+', label: 'Projects Completed' },
            { number: '99%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;