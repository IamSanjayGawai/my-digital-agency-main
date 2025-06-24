import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, TrendingUp, Video, Palette, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies',
      features: ['WordPress + Basic SEO', 'React/Next.js Applications', 'E-commerce Solutions', 'Portfolio & Business Sites'],
      priceRange: '₹+',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications',
      features: ['React Native Apps', 'Android & iOS Support', 'Node.js Backend', 'MongoDB/Firebase Integration'],
      priceRange: '₹+',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions',
      features: ['SEO Optimization', 'Google Ads Management', 'Social Media Marketing', 'Content Strategy'],
      priceRange: '₹/month',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Video,
      title: 'Video Editing & Design',
      description: 'Professional video content creation',
      features: ['Promo Videos', 'YouTube Intros/Outros', 'Reels & Shorts', 'Motion Graphics'],
      priceRange: '₹/video',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Palette,
      title: 'Branding Services',
      description: 'Complete brand identity solutions',
      features: ['Logo Design', 'UI/UX Design (Figma)', 'Banner Creation', 'Brand Guidelines'],
      priceRange: '₹',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Advanced search engine optimization',
      features: ['Technical SEO Audit', 'Keyword Research', 'Content Optimization', 'Link Building'],
      priceRange: '₹/month',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital universe
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                    {service.priceRange}
                  </span>
                  <motion.button
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;