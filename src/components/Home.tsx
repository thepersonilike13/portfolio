import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants for staggered text effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {/* Welcome Text with Animation */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 font-light tracking-wide"
          >
            {/* 📝 EDIT: Customize your welcome message */}
            Welcome to my portfolio
          </motion.p>

          {/* Main Name/Title - Large and Bold */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            {/* 📝 EDIT: Replace with your full name */}
            <span className="block">Allair</span>
            <span className="block gradient-text">Joshua</span>
          </motion.h1>

          {/* Subtitle/Role */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed"
          >
            {/* 📝 EDIT: Customize your role/description */}
            AI and machine learning Student & Aspiring Software Developer
          </motion.p>

          {/* Brief Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            {/* 📝 EDIT: Write a brief description about yourself */}
            Passionate about creating innovative solutions through code. 
            Currently pursuing my degree while building exciting projects 
            and learning new technologies.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-black rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/3 right-1/4 w-3 h-3 bg-gray-400 rounded-full opacity-30"
            />
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-black rounded-full opacity-25"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;