import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Send, CheckCircle } from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  category: string;
}

const QuotationGenerator: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions: ServiceOption[] = [
    // Website Development
    { id: 'wordpress-basic', name: 'WordPress Website (Basic)', basePrice: 5000, category: 'Website' },
    { id: 'wordpress-advanced', name: 'WordPress Website (Advanced)', basePrice: 12000, category: 'Website' },
    { id: 'react-website', name: 'React/Next.js Website', basePrice: 18000, category: 'Website' },
    { id: 'ecommerce-basic', name: 'E-commerce Website (Basic)', basePrice: 25000, category: 'Website' },
    { id: 'ecommerce-advanced', name: 'E-commerce Website (Advanced)', basePrice: 45000, category: 'Website' },
    
    // Mobile Apps
    { id: 'mobile-app-basic', name: 'Mobile App (Basic)', basePrice: 35000, category: 'Mobile' },
    { id: 'mobile-app-advanced', name: 'Mobile App (Advanced)', basePrice: 60000, category: 'Mobile' },
    
    // Digital Marketing
    { id: 'seo-basic', name: 'SEO Package (Basic)', basePrice: 8000, category: 'Marketing' },
    { id: 'seo-advanced', name: 'SEO Package (Advanced)', basePrice: 15000, category: 'Marketing' },
    { id: 'social-media', name: 'Social Media Management', basePrice: 12000, category: 'Marketing' },
    { id: 'google-ads', name: 'Google Ads Management', basePrice: 10000, category: 'Marketing' },
    
    // Design & Branding
    { id: 'logo-design', name: 'Logo Design', basePrice: 3000, category: 'Design' },
    { id: 'ui-ux-design', name: 'UI/UX Design', basePrice: 15000, category: 'Design' },
    { id: 'branding-package', name: 'Complete Branding Package', basePrice: 25000, category: 'Design' },
    
    // Video & Content
    { id: 'video-editing', name: 'Video Editing (per video)', basePrice: 2500, category: 'Content' },
    { id: 'content-creation', name: 'Content Creation Package', basePrice: 8000, category: 'Content' },
  ];

  const categories = [...new Set(serviceOptions.map(service => service.category))];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = serviceOptions.find(s => s.id === serviceId);
      return total + (service?.basePrice || 0);
    }, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Quote request:', {
      ...formData,
      selectedServices,
      estimatedTotal: calculateTotal(),
    });
    setSubmitted(true);
  };

  const handleWhatsAppShare = () => {
    const selectedServiceNames = selectedServices.map(id => 
      serviceOptions.find(s => s.id === id)?.name
    ).join(', ');
    
    const message = `Hi! I'm interested in the following services:
${selectedServiceNames}

Estimated Total: ₹${calculateTotal().toLocaleString()}

My details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Description: ${formData.description}`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (submitted) {
    return (
      <section id="quotation" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Quote Request Sent!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Thank you for your interest. We'll get back to you within 24 hours with a detailed proposal.
            </p>
            <motion.button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Another Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quotation" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <Calculator className="inline-block w-12 h-12 mr-4 text-purple-600" />
            Get Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Custom Quote</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Select the services you need and get an instant estimate for your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Selection */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Select Services
              </h3>
              
              {categories.map(category => (
                <div key={category} className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {category}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceOptions
                      .filter(service => service.category === category)
                      .map(service => (
                        <motion.div
                          key={service.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                            selectedServices.includes(service.id)
                              ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                          }`}
                          onClick={() => toggleService(service.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900 dark:text-white">
                              {service.name}
                            </span>
                            <span className="text-purple-600 font-semibold">
                              ₹{service.basePrice.toLocaleString()}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Quote Summary & Form */}
          <div className="space-y-6">
            {/* Quote Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Quote Summary</h3>
              <div className="space-y-2 mb-4">
                {selectedServices.map(serviceId => {
                  const service = serviceOptions.find(s => s.id === serviceId);
                  return (
                    <div key={serviceId} className="flex justify-between text-sm">
                      <span>{service?.name}</span>
                      <span>₹{service?.basePrice.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-2xl font-bold">₹{calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Your Details
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                />
                <textarea
                  placeholder="Project Description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white resize-none"
                />
                
                <div className="space-y-3">
                  <motion.button
                    type="submit"
                    disabled={selectedServices.length === 0}
                    className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    whileHover={{ scale: selectedServices.length > 0 ? 1.02 : 1 }}
                    whileTap={{ scale: selectedServices.length > 0 ? 0.98 : 1 }}
                  >
                    <Send className="inline-block w-4 h-4 mr-2" />
                    Send Quote Request
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={handleWhatsAppShare}
                    disabled={selectedServices.length === 0}
                    className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    whileHover={{ scale: selectedServices.length > 0 ? 1.02 : 1 }}
                    whileTap={{ scale: selectedServices.length > 0 ? 0.98 : 1 }}
                  >
                    Share via WhatsApp
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotationGenerator;