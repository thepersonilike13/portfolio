import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

// 📝 EDIT: Add your projects here - easily scalable structure
const projects = [
  {
    id: 1,
    title: 'legal llm',
    description: 'A multi agent system that allows users to interact with a legal knowledge base, ask questions, and receive accurate answers. It utilizes advanced natural language processing techniques to understand user queries and provide relevant information, and help them draft legal documents.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'fastAPI', 'flask','Agent Development Kit'],
    liveUrl: 'https://github.com/thepersonilike13/legal_llm', // 🔗 EDIT: Add your live project URL
    githubUrl: 'https://github.com/thepersonilike13/legal_llm', // 🔗 EDIT: Add your GitHub URL
  },
  {
    id: 2,
    title: 'Task reassignment App',
    description: 'A collaborative task reassignment application with real-time updates, built using Python and Firebase. It allows users to reassign tasks seamlessly and track progress.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['python', 'adk', 'Firebase', 'html'],
    liveUrl: 'https://github.com/thepersonilike13/task-reassignment-agent', // 🔗 EDIT: Add your live project URL
    githubUrl: 'https://github.com/thepersonilike13/task-reassignment-agent', // 🔗 EDIT: Add your GitHub URL
  },
  {
    id: 3,
    title: 'Indian Recipe generator',
    description: 'recipe generator that allows users to input ingredients and receive a list of Indian recipes they can make with those ingredients. It uses a SQLite database to store recipes and their ingredients, and a Python backend to handle user requests.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['python', 'sqlite','pandas','streamlit' ],
    liveUrl: 'https://github.com/thepersonilike13/food-recipe-test/tree/main', // 🔗 EDIT: Add your live project URL
    githubUrl: 'https://github.com/thepersonilike13/food-recipe-test/tree/main', // 🔗 EDIT: Add your GitHub URL
  },
  // 📝 EDIT: Add more projects by copying the structure above
  // {
  //   id: 4,
  //   title: 'Your Next Project',
  //   description: 'Description of your next project...',
  //   image: 'https://images.pexels.com/photos/YOUR_IMAGE_ID/pexels-photo-YOUR_IMAGE_ID.jpeg?auto=compress&cs=tinysrgb&w=600',
  //   technologies: ['Tech1', 'Tech2', 'Tech3'],
  //   liveUrl: 'https://your-project.com',
  //   githubUrl: 'https://github.com/username/project',
  // },
];

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white"
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
            My Projects
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-black mx-auto mb-6"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            {/* 📝 EDIT: Customize your projects section description */}
            Here are some of the projects I've worked on. Each project represents 
            a unique challenge and learning experience in my development journey.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/thepersonilike13" // 🔗 EDIT: Add your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border-2 border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300 hover-lift"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;