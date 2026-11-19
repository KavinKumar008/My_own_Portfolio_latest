export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

import attirenestImg from "../assets/attirenest_screenshot.png";
import billcraftImg from "../assets/billcraft_screenshot.png"
import ecommerceImg from "../assets/ecommerceapp_image.png";
import pixabayImg from "../assets/pixabayclone_image.png";
import todoImg from "../assets/todoappfilter_image.png";
import weatherImg from "../assets/weatherapp_image.png";
import employeeImg from "../assets/employeedetails_image.png";

export const projectsData: Project[] = [
  {
    id: "attirenest",
    title: "AttireNest - E-Commerce Fashion Platform",
    description:
      "A commercial clothing and apparel e-commerce web application featuring responsive catalog browsing, product filtering, secure customer checkout, and modern storefront styling.",
    tags: ["Freelance", "Featured", "Full Stack"],
    techStack: ["Next JS", "JavaScript", "Tailwind CSS", "REST API", "MongoDB"],
    image: attirenestImg,
    liveUrl: "https://www.attirenest.in/",
    githubUrl: "https://github.com/ragunanthan/attirenest_catelog",
    featured: true,
  },
  {
    id: "billcraft",
    title: "BillCraft - Enterprise Invoicing & Billing Suite",
    description:
      "A cloud-based billing and invoicing platform developed for businesses to generate GST-compliant invoices, manage client profiles, automate tax calculations, and track payment histories.",
    tags: ["Freelance", "Featured", "Web App"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "REST API", "Cloud Solutions"],
    image: billcraftImg,
    liveUrl: "https://qabillcraft.cloudcraftmen.com/",
    featured: true,
  },
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
