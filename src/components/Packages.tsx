import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Packages: React.FC = () => {
  const packages = [
    {
      name: 'Basic Starter',
      icon: Star,
      price: '₹',
      period: 'One-time',
      description: 'Perfect for small businesses starting their digital journey',
      features: [
        'WordPress Website (5 pages)',
        'Basic SEO Setup',
        'Mobile Responsive Design',
        'Contact Form Integration',
        '1 Month Free Support',
        'SSL Certificate',
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false,
    },
    {
      name: 'Pro Website',
      icon: Zap,
      price: '₹',
      period: 'One-time',
      description: 'Advanced features for growing businesses',
      features: [
        'React.js/Next.js Website',
        'Advanced SEO Optimization',
        'Custom Contact Forms',
        'Admin Dashboard',
        'Payment Gateway Integration',
        'Analytics Setup',
        '3 Months Free Support',
        'Speed Optimization',
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      name: 'E-Commerce Package',
      icon: Crown,
      price: '₹',
      period: 'One-time',
      description: 'Complete online store solution',
      features: [
        'Full E-commerce Website',
        'Product Catalog Management',
        'Multiple Payment Gateways',
        'Inventory Management',
        'Order Tracking System',
        'Customer Dashboard',
        'Email Marketing Integration',
        '6 Months Free Support',
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false,
    },
    {
      name: 'Digital Boost',
      icon: Zap,
      price: '₹',
      period: 'Monthly',
      description: 'Website + Marketing combo',
      features: [
        'Professional Website',
        '1 Month Social Media Management',
        'SEO Optimization',
        'Google Ads Setup',
        'Content Creation',
        'Analytics & Reporting',
        'WhatsApp Business Setup',
      ],
      color: 'from-orange-500 to-red-500',
      popular: false,
    },
    {
      name: 'All-In-One Growth',
      icon: Crown,
      price: '₹',
      period: 'Starting',
      description: 'Complete digital transformation',
      features: [
        'Website + Mobile App',
        'Digital Marketing Strategy',
        'Video Content Creation',
        'Brand Identity Package',
        'E-commerce Integration',
        'Advanced Analytics',
        'Priority Support',
        'Monthly Strategy Calls',
      ],
      color: 'from-indigo-500 to-purple-500',
      popular: false,
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
    <section id="packages" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Service <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the perfect package for your business needs and budget
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  "
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              variants={itemVariants}
              className={`relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                pkg.popular 
                  ? 'border-purple-500 scale-105' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
              whileHover={{ y: -5 }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8 ">
                <div className={`w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {pkg.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {pkg.description}
                </p>
                
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {pkg.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">
                    {pkg.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    : 'bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#quotation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;