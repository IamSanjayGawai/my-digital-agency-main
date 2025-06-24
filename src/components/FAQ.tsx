import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does CosmicTech offer?',
      answer: 'We offer a comprehensive range of digital services including website development (WordPress, React/Next.js), mobile app development (React Native), digital marketing (SEO, Google Ads, Social Media), video editing & design, and complete branding services. We also provide custom solutions tailored to your specific business needs.',
    },
    {
      question: 'How much does a website cost?',
      answer: 'Our website development costs vary based on complexity and features. Basic WordPress sites start from ₹5,000, professional React/Next.js websites from ₹15,000, and e-commerce platforms from ₹30,000. We provide detailed quotes after understanding your specific requirements and can work within most budgets.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines depend on complexity and scope. Simple websites typically take 1-2 weeks, custom web applications 4-8 weeks, mobile apps 6-12 weeks, and complete digital marketing campaigns are ongoing. We provide detailed timelines during our initial consultation and keep you updated throughout the process.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer comprehensive support packages including regular updates, security monitoring, backup services, and technical support. Our basic packages include 1-6 months of free support, and we offer extended maintenance contracts for ongoing peace of mind.',
    },
    {
      question: 'Can you help improve my existing website\'s SEO?',
      answer: 'Absolutely! We offer both basic and advanced SEO services including technical audits, keyword research, content optimization, and link building. Our SEO strategies have helped clients achieve first-page Google rankings within 3-6 months. We provide detailed reports and transparent progress tracking.',
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, we work with clients globally! We have experience working across different time zones and can accommodate various communication preferences. Our team is available for video calls, and we use collaborative tools to ensure smooth project management regardless of location.',
    },
    {
      question: 'What makes CosmicTech different from other agencies?',
      answer: 'Our unique combination of technical expertise, creative design, and strategic marketing sets us apart. We don\'t just build websites or apps - we create comprehensive digital solutions that drive business growth. Our transparent pricing, guaranteed response times, and commitment to quality have earned us 99% client satisfaction.',
    },
    {
      question: 'Can you handle rush projects or tight deadlines?',
      answer: 'Yes, we can accommodate urgent projects! We offer expedited development services for clients with tight deadlines. Rush projects may involve additional costs due to resource allocation, but we\'ll work with you to find the best solution that meets your timeline and budget.',
    },
    {
      question: 'Do you provide training on how to manage my website/app?',
      answer: 'Absolutely! We believe in empowering our clients. We provide comprehensive training sessions, detailed documentation, and video tutorials for managing your website or app. We also offer ongoing training support and can provide additional training sessions as needed.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, UPI, credit/debit cards, and digital wallets. For larger projects, we offer flexible payment plans with milestone-based payments. International clients can pay via wire transfer or international payment platforms.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-purple-600 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Frequently Asked <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our services, pricing, and process. Can't find what you're looking for? Feel free to contact us!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200"
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-purple-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-purple-600" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our team is here to help! Get in touch with us for personalized answers to your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </motion.button>
              <motion.button
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/919876543210?text=Hi! I have some questions about your services.', '_blank')}
              >
                WhatsApp Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;