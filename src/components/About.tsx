import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Smartphone, Server, GitBranch, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  // 📝 EDIT: Update with your actual skills and corresponding icons
  const skills = [
    { name: 'JavaScript', icon: Code },
    { name: 'React', icon: Globe },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Code },
    { name: 'TypeScript', icon: Code },
    { name: 'Git', icon: GitBranch },
    { name: 'MongoDB', icon: Database },
    { name: 'Express.js', icon: Zap }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-black mb-4"
          >
            About Me
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-black mx-auto mb-6"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6 text-center mb-16"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-lg leading-relaxed"
            >
              {/* 📝 EDIT: Write your personal story here */}
              I'm a passionate Computer Science student with a love for creating 
              innovative solutions through code. My journey in programming started 
              during high school, and since then, I've been constantly learning 
              and exploring new technologies.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-lg leading-relaxed"
            >
              {/* 📝 EDIT: Add more details about your interests and goals */}
              I specialize in agentic AI workflows, with experience in ADK, langchain, 
              and other agentic frameworks and processes. When I'm not coding, you can find 
              me reading books, over analyzing to open-source projects, or 
              exploring the latest trends in technology.
            </motion.p>
          </motion.div>

          {/* Skills/Technologies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-center"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-black"
            >
              Technologies I Work With
            </motion.h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    delay: 0.8 + index * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-default group border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 mx-auto mb-3 bg-black text-white rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300"
                  >
                    <skill.icon size={24} />
                  </motion.div>
                  <p className="font-medium text-gray-800 group-hover:text-black transition-colors duration-300">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;