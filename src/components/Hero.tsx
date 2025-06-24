import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Rocket, Star, Globe, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const earthY = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const earthRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const starsY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const earthX = useTransform([mouseX, mouseY], ([x, y]) => (x - window.innerWidth / 2) * 0.02);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Stars Background */}
      <motion.div
        style={{ y: starsY }}
        className="absolute inset-0 z-0"
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Floating Planets */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main Earth - Scroll Controlled */}
      <motion.div
        style={{ 
          y: earthY,
          rotate: earthRotate,
          x: earthX
        }}
        className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-r from-green-500 via-blue-500 to-green-600 rounded-full shadow-2xl"
      >
        <div className="absolute inset-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-70"></div>
        <div className="absolute inset-4 bg-gradient-to-r from-green-300 to-blue-300 rounded-full opacity-50"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Launch Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Digital Universe
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              From stellar websites to cosmic mobile apps, we craft digital experiences that are out of this world
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              onClick={scrollToServices}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Rocket size={20} />
                Explore Services
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
            </motion.button>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Globe, title: 'Web Development', desc: 'Modern, responsive websites' },
              { icon: Rocket, title: 'Mobile Apps', desc: 'Cross-platform solutions' },
              { icon: Star, title: 'Digital Marketing', desc: 'SEO & Social Media' },
              { icon: Zap, title: 'Branding', desc: 'Logo & UI/UX Design' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;