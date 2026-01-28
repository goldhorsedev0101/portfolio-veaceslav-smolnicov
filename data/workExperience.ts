// data/workExperience.ts
import { FaBriefcase, FaPython, FaDatabase, FaAws, FaReact, FaCode, FaServer } from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiPostgresql, SiGraphql, SiNextdotjs, SiDocker, SiGithubactions } from 'react-icons/si';
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  location?: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "ExpandX",
    position: "Software Engineer",
    duration: "01/2024 – Present",
    location: "Remote",
    year: 2024,
    description: [
      "Constructed web applications handling 9,000 concurrent users via React and TypeScript; optimized code, reducing latency during peak usage by 1.5 seconds, and improved end-user experience for high-value customers.",
      "Delivered real-time analytics dashboards with React and TypeScript, eliminating 40% of manual KPI reporting and accelerating data-driven decisions.",
      "Designed scalable backend services with Node.js, PostgreSQL, REST, and GraphQL, improving average response times by 30% while lowering query costs.",
      "Connected 6+ external platforms including CRM, email automation, and analytics systems, shortening campaign execution cycles by 35%.",
      "Provisioned serverless and containerized workloads on AWS (Lambda, ECS, S3), enabling elastic scaling with minimal operational overhead.",
    ],
    skills: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: FaServer },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "GraphQL", icon: SiGraphql },
      { name: "AWS", icon: FaAws },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
    logo: "https://expandx.com/",
  },
  {
    company: "Temy",
    position: "Full Stack Developer",
    duration: "02/2021 – 11/2023",
    location: "Remote",
    year: 2021,
    description: [
      "Introduced Next.js server-side rendering, cutting first-page load times by 45% and strengthening organic search visibility.",
      "Established secure API layers using JWT, OAuth2, and role-based access controls, safeguarding all authenticated workflows.",
      "Engineered distributed transaction pipelines processing thousands of monthly payments via Stripe, PayPal, Plaid, and Payoneer.",
      "Activated real-time notifications and live updates using WebSockets, raising user engagement by 25%.",
      "Reinforced system stability through comprehensive unit and integration coverage, reducing production defects by 30%.",
      "Containerized applications and coordinated CI/CD execution with Docker and GitLab pipelines, accelerating release cadence by 40%."
    ],
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: FaServer },
      { name: "Docker", icon: SiDocker },
      { name: "JWT", icon: FaCode },
    ],
    logo: "https://www.temy.co/"
  },
  {
    company: "CreativSoft",
    position: "Software Developer",
    duration: "12/2019 – 01/2021",
    location: "Chisinau, Moldova",
    year: 2019,
    description: [
      "Delivered web and mobile solutions for 10+ client engagements across education, enterprise, and healthcare domains.",
      "Developed high-throughput backend systems managing millions of records with Node.js, Laravel, MySQL, and Redis.",
      "Deployed authentication, multi-role authorization, and reporting capabilities adopted by hundreds of daily users.",
      "Transformed legacy PHP and JavaScript systems into modern TypeScript-driven architectures, cutting maintenance overhead by 30%.",
      "Crafted cross-platform mobile applications using React Native, maintaining full feature parity across Android and iOS.",
      "Accelerated build and release operations via Jenkins-based pipelines, trimming release preparation time by 50%."
    ],
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "Node.js", icon: FaServer },
      { name: "Python", icon: FaPython },
      { name: "MySQL", icon: FaDatabase },
      { name: "TypeScript", icon: SiTypescript },
    ],
    logo: "https://www.creativ-soft.com/"
  }
];
