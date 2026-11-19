export interface SocialLink {
  label: string;
  href: string;
  iconName: "github" | "linkedin" | "mail" | "instagram";
  primary?: boolean;
}

export const personalInfo = {
  name: "Kavin Kumar",
  title: "Software Developer & MERN Engineer",
  tagline: "Crafting modern web applications with precision, performance, and clean code.",
  email: "kavikumarsraja@gmail.com",
  phone: "+91 8248939636",
  location: "India",
  status: "Open to Full-Time & Freelance Opportunities",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kavin-kumar-s-r-564b0b2b8/",
      iconName: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/KavinKumar008",
      iconName: "github",
    },
    {
      label: "Email",
      href: "mailto:kavikumarsraja@gmail.com",
      iconName: "mail",
    },
  ] as SocialLink[],
};
