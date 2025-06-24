import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: '10 Essential Web Development Trends for 2024',
      excerpt: 'Discover the latest trends shaping the future of web development, from AI integration to advanced CSS features.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dev Team',
      date: '2024-01-15',
      category: 'Web Development',
      readTime: '5 min read',
      tags: ['React', 'JavaScript', 'Trends'],
    },
    {
      title: 'The Complete Guide to SEO in 2024',
      excerpt: 'Learn the latest SEO strategies and techniques to improve your website\'s search engine rankings and organic traffic.',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Marketing Team',
      date: '2024-01-10',
      category: 'Digital Marketing',
      readTime: '8 min read',
      tags: ['SEO', 'Google', 'Marketing'],
    },
    {
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Compare the pros and cons of native and cross-platform mobile app development to make the right choice for your project.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Mobile Team',
      date: '2024-01-05',
      category: 'Mobile Development',
      readTime: '6 min read',
      tags: ['React Native', 'Flutter', 'Mobile'],
    },
    {
      title: 'Brand Identity Design: Creating Memorable Brands',
      excerpt: 'Explore the key elements of successful brand identity design and how to create a brand that resonates with your audience.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Design Team',
      date: '2024-01-01',
      category: 'Design',
      readTime: '7 min read',
      tags: ['Branding', 'Design', 'Identity'],
    },
    {
      title: 'Video Marketing: Engaging Your Audience in 2024',
      excerpt: 'Discover how video content can boost your marketing efforts and learn the best practices for creating engaging videos.',
      image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Content Team',
      date: '2023-12-28',
      category: 'Video Marketing',
      readTime: '4 min read',
      tags: ['Video', 'Marketing', 'Content'],
    },
    {
      title: 'E-commerce Success: Best Practices for Online Stores',
      excerpt: 'Learn the essential strategies and best practices for building and growing a successful e-commerce business.',
      image: 'https://images.pexels.com/photos/4968636/pexels-photo-4968636.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'E-commerce Team',
      date: '2023-12-25',
      category: 'E-commerce',
      readTime: '9 min read',
      tags: ['E-commerce', 'Online Store', 'Business'],
    },
  ];

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of digital technology and marketing.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              variants={itemVariants}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md text-xs"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.div
                  className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
            </motion.article>
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
            Want to stay updated with our latest insights and tips?
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe to Newsletter
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;