"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { FaLightbulb, FaCode, FaPizzaSlice, FaHiking, FaPuzzlePiece, FaChalkboardTeacher } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { CardSpotlight } from '../ui/card-spotlight';
import ActionButtons from '../ActionButtons';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20" ref={ref}>
      <motion.div 
      className="w-full sm:w-[65%] pr-0 sm:pr-6 mb-8 sm:mb-0 sm:ml-[-20px]"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
          <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              👋 Hello there! <br></br>I&apos;m Veaceslav Smolnicov, a Software Engineer with 7+ years of experience delivering scalable web and mobile applications across fintech, edtech, SaaS, and AI-driven platforms.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> 
              I have a proven ability to support systems used by tens of thousands of users, optimize application performance by 30-45%, and build data-intensive dashboards and APIs handling millions of records. My strong background includes React, React Native, TypeScript, Node.js, Express, and Python, with hands-on experience deploying cloud-native solutions on AWS and GCP.
            </p>
            <p>
              I&apos;m focused on building maintainable, high-throughput systems that balance performance, reliability, and long-term scalability. Throughout my career, I&apos;ve:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li> Constructed web applications handling 9,000+ concurrent users</li>
              <li>Optimized code performance, reducing latency by up to 1.5 seconds during peak usage</li>
              <li>Delivered real-time analytics dashboards, eliminating 40% of manual KPI reporting</li>
            </ul>
            <p>
              I&apos;m passionate about creating solutions that make a real impact, whether it&apos;s streamlining workflows, improving user experiences, or building scalable infrastructure. I believe in writing clean, maintainable code and continuously learning new technologies to stay at the forefront of software engineering.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="w-full sm:w-[35%] flex flex-col justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full max-w-[320px] aspect-square mb-6'>
          <StyledPic />
        </div>
        <div className="w-full pt-6">
          <ActionButtons />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
