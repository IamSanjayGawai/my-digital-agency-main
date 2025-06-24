import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Award, Calendar, Book, AlignCenterVertical as Certificate } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      duration: '2022 - Present',
      description: 'Led development of enterprise-level applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Digital Marketing Specialist',
      company: 'GrowthLab Agency',
      duration: '2021 - 2022',
      description: 'Managed SEO campaigns and social media strategies for 50+ clients, achieving 300% ROI on average.',
    },
    {
      title: 'Freelance Developer',
      company: 'Independent',
      duration: '2020 - 2021',
      description: 'Built custom websites and mobile apps for startups and small businesses.',
    },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Indian Institute of Technology',
      year: '2020',
      grade: 'CGPA: 8.5/10',
    },
    {
      degree: 'Digital Marketing Certification',
      institution: 'Google Digital Academy',
      year: '2021',
      grade: 'Score: 95%',
    },
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Analytics Certified',
    'Facebook Blueprint Certification',
    'React Developer Certification',
    'Node.js Certified Developer',
    'Figma Design Certification',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">CosmicTech</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg"
            >
              <Eye className="w-12 h-12 text-purple-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                To empower businesses with cutting-edge digital solutions that transcend boundaries and create meaningful connections in the digital universe.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg"
            >
              <Target className="w-12 h-12 text-pink-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                To deliver exceptional digital experiences through innovative web development, strategic marketing, and creative design solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-12">
            <Award className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h3>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="text-purple-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.duration}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-8">
              <Book className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                  <p className="text-purple-600 font-semibold mb-2">{edu.institution}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400">{edu.year}</span>
                    <span className="text-green-600 font-semibold">{edu.grade}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Certifications */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          > */}
            {/* <div className="flex items-center mb-8">
              <Certificate className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div> */}
            
            {/* <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-lg border-l-4 border-purple-500"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <p className="text-gray-900 dark:text-white font-semibold">{cert}</p>
                </motion.div>
              ))}
            </div> */}
          {/* </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default About;