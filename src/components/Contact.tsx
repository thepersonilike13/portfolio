import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
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

  // 📝 EDIT: Update your contact information and social media links
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'a.allairjoshua@gmail.com', // 📧 EDIT: Your email
      href: 'mailto:a.allairjoshua@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8925255543', // 📞 EDIT: Your phone number
      href: 'tel:+91 8925255543',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, India', // 📍 EDIT: Your location
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/thepersonilike13', // 🔗 EDIT: Your GitHub URL
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/allair-joshua-89a9b2265/', // 🔗 EDIT: Your LinkedIn URL
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:a.allairjoshua@gmail.com', // 📧 EDIT: Your email
    },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-black mx-auto mb-6"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            {/* 📝 EDIT: Customize your contact section description */}
            I'm always open to discussing new opportunities, collaborating on 
            interesting projects, or just having a chat about technology. 
            Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <item.icon size={24} />
                </motion.div>
                <h3 className="font-semibold text-black mb-2">{item.label}</h3>
                {item.href ? (
                  <motion.a
                    href={item.href}
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    {item.value}
                  </motion.a>
                ) : (
                  <p className="text-gray-600">{item.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Media Links - Centered */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-center"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-black mb-8"
            >
              Follow Me
            </motion.h3>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    delay: 0.6 + index * 0.2,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 bg-white border-2 border-gray-300 text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;