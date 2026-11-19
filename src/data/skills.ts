export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "Building responsive, accessible, and high-performance user interfaces.",
    skills: [
      { name: "React.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "React Native" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    category: "Backend & Databases",
    description: "Architecting RESTful services, server workflows, and persistent databases.",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "Java" },
    ],
  },
  {
    category: "DevOps, Tools & Design",
    description: "Modern development workflows, versioning, containerization, and prototyping.",
    skills: [
      { name: "Docker" },
      { name: "Git & GitHub", highlight: true },
      { name: "Figma" },
      { name: "Postman" },
      { name: "Vite" },
    ],
  },
];
