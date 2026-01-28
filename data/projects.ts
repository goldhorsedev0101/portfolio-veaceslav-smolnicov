// data/projects.ts

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Mokum Taxi – Taxi & Airport Transfers",
    description: "Mokum Taxi lets users book reliable taxi rides and airport transfers in Amsterdam with fixed prices, no surprises, and professional drivers.",
    category: "Personal Project",
    image: "/pics/react-mokum-taxi.jpg",
    githubLink: "https://mokum‑taxi.nl/",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt", "SendGrid", "Stripe"],
    skills: [
      {name: "Frontend Development"},
      { name: "UI/UX Design"},
      { name: "Responsive Web Design"},
      { name: "Performance Optimization"}
    ]
  },
  {
    id: 2,
    title: "Autodesk – 3D Design, Engineering",
    description: "Autodesk helps teams design, build, and manufacture faster while reducing errors and improving collaboration.",
    category: "Personal Project",
    image: "/pics/react-autodesk.jpg",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "PostgreSQL", "Python", "Selenium", "Pandas", "GPT"],
    githubLink: "https://www.autodesk.com/",
    skills: [
      { name: "Data Analysis"},
      { name: "Automation"},
      { name: "Machine Learning"},
      { name: "Document Generation"}
    ]
  },
  {
    id: 3,
    title: "Gro Call – Team Communication",
    description: "Gro Call helps teams manage communication, access, and workflows in one place to reduce manual work and improve coordination.",
    category: "Personal Project",
    technologies: ["React", "Next.js", "TailwindCSS","REST APIs", "PostgreSQL", "Redux Toolkit"],
    image: "/pics/react-grocall.jpg",
    githubLink: "https://www.gro-call.com/",
    skills: [
      { name: "API Integration"},
      { name: "Asynchronous Programming"},
      { name: "Data Synchronization"},
      { name: "Python Development"},
      { name: "Task Automation"}
    ]
  },
  {
    id: 4,
    title: "Fundraiz – AI‑Powered Fundraising Platform",
    description: "Fundraiz helps nonprofits and fundraisers raise more money by automating donor engagement, analysing donor behaviour, personalising campaigns, and replacing multiple tools with one AI‑driven platform.",
    category: "Personal Project",
    technologies: ["React", "Next.js", "TypeScript","Node.js", "GraphQL", "REST APIs", "PostgreSQL", "AI/ML Integration", "Firebase"],
    image: "/pics/ai-fundraiz.jpg",
    githubLink: "https://visionforlife.au/",
    skills: [
      { name: "API Integration"},
      { name: "Asynchronous Programming"},
      { name: "Data Synchronization"},
      { name: "Python Development"},
      { name: "Task Automation"}
    ]
  },
  {
    id: 5,
    title: "Arcus BTC – Institutional Bitcoin Yield & Credit Platform",
    description: "Arcus BTC helps institutions and family offices generate secure yield on Bitcoin and stablecoins, access liquidity without selling assets, and integrate Bitcoin lending into their systems with compliance and high security.",
    category: "Personal Project",
    technologies: ["React", "Next.js", "TypeScript","Node.js", "Web3 Libraries", "PostgreSQL", "Docker", "AWS"],
    image: "/pics/blockchain-arcusbtc.jpg",
    githubLink: "https://arcusbtc.com/",
    skills: [
      { name: "API Integration"},
      { name: "Asynchronous Programming"},
      { name: "Data Synchronization"},
      { name: "Python Development"},
      { name: "Task Automation"}
    ]
  },
  {
    id: 6,
    title: "Servanna Care – Home & Health Care Services",
    description: "Servanna Care offers home and health support services like nursing, nanny care, physiotherapy, and specialist caregiving to make at‑home care easier and reliable.",
    category: "Personal Project",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Firebase", "REST APIs", "Vercel/Netlify"],
    image: "/pics/servannacare.jpg",
    githubLink: "https://servannacare.netlify.app/",
    skills: [
      { name: "API Integration"},
      { name: "Asynchronous Programming"},
      { name: "Data Synchronization"},
      { name: "Python Development"},
      { name: "Task Automation"}
    ]
  },
  {
    id: 7,
    title: "Vision For Life – Ophthalmology & Eye Care Clinic",
    description: "Vision For Life provides advanced eye care and surgical treatments to improve vision and treat conditions like cataracts, glaucoma, retina issues, and laser eye correction.",
    category: "Personal Project",
    technologies: ["HTML", "CSS", "JavaScript","PHP", "Bootstrap", "jQuery", "REST APIs", "MySQL", "SEO"],
    image: "/pics/health-visionforlife.jpg",
    githubLink: "https://visionforlife.au/",
    skills: [
      { name: "API Integration"},
      { name: "Asynchronous Programming"},
      { name: "Data Synchronization"},
      { name: "Python Development"},
      { name: "Task Automation"}
    ]
  },
  
];
