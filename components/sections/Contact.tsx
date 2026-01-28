"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';

const Contact = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20" ref={ref}>
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-primary flex items-center justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
              >
                <FaEnvelope className="text-primary text-xl" />
                <a 
                  href="mailto:veaceslavsmolnicov.in@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  veaceslavsmolnicov.in@gmail.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
              >
                <FaMapMarkerAlt className="text-primary text-xl" />
                <span className="text-foreground">Chisinau, Moldova</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
              >
                <FaLinkedin className="text-primary text-xl" />
                <a 
                  href="https://linkedin.com/in/slava-smolnicov-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  LinkedIn Profile
                </a>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;