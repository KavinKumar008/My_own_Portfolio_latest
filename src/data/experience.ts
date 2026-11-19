export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  badge?: string;
  description: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "kovaion-internship",
    role: "MERN Stack Developer Intern",
    company: "Kovaion Consulting India Private Limited",
    location: "Coimbatore, India",
    period: "Jan 2025 – Apr 2025",
    badge: "Internship",
    description: [
      "Designed and delivered automated employee leave tracking modules, introducing real-time earned leave balance computations.",
      "Implemented server-side cron jobs to schedule monthly leave accruals and auto-approval workflows without human intervention.",
      "Optimized query response times and data consistency with date-based filtering across employee records.",
      "Collaborated with cross-functional teams to integrate responsive frontend interfaces with robust Express/MongoDB backends.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Cron Jobs", "Tailwind CSS"],
  },
];
