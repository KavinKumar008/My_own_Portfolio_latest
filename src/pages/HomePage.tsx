import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "../data/personal";

const HomePage = () => {
  const headlineText = `I'M ${personalInfo.name.toUpperCase()}`;

  return (
    <section className="relative flex flex-col justify-center min-h-[60vh] max-w-4xl">
      {/* Retro / Monospace Display Headline with signature Codewonders Glitch */}
      <h1
        data-text={headlineText}
        className="glitch-text text-3xl sm:text-5xl md:text-6xl font-black tracking-widest uppercase mb-10 text-zinc-950 dark:text-white font-mono selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950"
      >
        {headlineText}
      </h1>

      {/* Story-driven conversational paragraphs with embedded interactive links */}
      <div className="space-y-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
        <p>
          Your friendly neighborhood software developer, MERN stack engineer, and problem solver. I spend my days (and often nights) crafting the digital web canvas with{" "}
          <Link
            to="/projects"
            className="font-bold text-zinc-950 dark:text-white underline decoration-2 underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            PROJECTS
          </Link>{" "}
          and lines of code, turning zeroes and ones into responsive, full-stack interactive experiences.
        </p>

        <p>
          Passionate about clean component architecture, scalable databases, and performance. I tread the path of minimalism, finding elegance in simplicity and readable code. When I'm not architecting full-stack applications, you can find me exploring modern developer tools or enjoying music. Anyways, you can always{" "}
          <Link
            to="/contact"
            className="font-bold text-zinc-950 dark:text-white underline decoration-2 underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            CONTACT ME
          </Link>
          .
        </p>
      </div>

      {/* "See More About Me" Link with continuous smooth gliding arrow */}
      <div className="mt-12">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 group transition-colors"
        >
          <span>See More About Me</span>
          <ArrowRight className="w-4 h-4 arrow-glide text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
