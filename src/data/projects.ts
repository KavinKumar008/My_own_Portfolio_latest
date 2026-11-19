export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
}

import ecommerceImg from "../assets/ecommerceapp_image.png";
import pixabayImg from "../assets/pixabayclone_image.png";
import todoImg from "../assets/todoappfilter_image.png";
import weatherImg from "../assets/weatherapp_image.png";
import employeeImg from "../assets/employeedetails_image.png";

export const projectsData: Project[] = [
  {
    id: "ecommerce-app",
    title: "Fullstack E-Commerce Platform",
    description:
      "A feature-rich full-stack e-commerce store with automated cart synchronization, Google OAuth authentication, and Razorpay payment gateway integration.",
    tags: ["Full Stack", "Featured"],
    techStack: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind CSS", "Razorpay"],
    image: ecommerceImg,
    liveUrl: "https://fanciful-malabi-f32b54.netlify.app/",
    githubUrl: "https://github.com/KavinKumar008/Ecommerce-App",
    featured: true,
  },
  {
    id: "pixabay-clone",
    title: "Pixabay Image Discovery Engine",
    description:
      "Responsive high-resolution image gallery powered by the Pixabay REST API, offering real-time tag queries, infinite browsing, and download workflows.",
    tags: ["Frontend", "API"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    image: pixabayImg,
    liveUrl: "https://elaborate-nougat-0c1ab9.netlify.app/",
    githubUrl: "https://github.com/KavinKumar008/pixabay-clone",
    featured: true,
  },
  {
    id: "todo-reminder",
    title: "Minimalist Task & Reminder Suite",
    description:
      "Clean, distraction-free productivity app featuring status filters, priority categorization, local persistence, and smooth dark/light theme switching.",
    tags: ["Frontend", "Productivity"],
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    image: todoImg,
    liveUrl: "https://statuesque-alfajores-9b8d83.netlify.app/",
    githubUrl: "https://github.com/KavinKumar008/todo-tasks",
  },
  {
    id: "weather-app",
    title: "Live Atmospheric Weather Radar",
    description:
      "Real-time global weather search app fetching meteorological observations and forecasts through the OpenWeatherMap API with responsive visuals.",
    tags: ["Frontend", "API"],
    techStack: ["React", "JavaScript", "OpenWeather API", "CSS3"],
    image: weatherImg,
    liveUrl: "https://roaring-lolly-f859c2.netlify.app/",
    githubUrl: "https://github.com/KavinKumar008/Weather-app-now",
  },
  {
    id: "employee-management",
    title: "Employee Directory & CRUD Portal",
    description:
      "Type-safe administrative dashboard designed for managing staff profiles, role assignments, dynamic search filtering, and CRUD operations.",
    tags: ["Frontend", "Tooling"],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    image: employeeImg,
    liveUrl: "https://elegant-madeleine-811792.netlify.app/",
    githubUrl: "https://github.com/KavinKumar008/table-project",
  },
];
