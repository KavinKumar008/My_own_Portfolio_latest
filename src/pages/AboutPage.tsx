import myPhoto from "../assets/myphoto(3)-2025.png";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Server, Wrench, Calendar, MapPin } from "lucide-react";
import { skillsData } from "../data/skills";
import { experienceData } from "../data/experience";

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend Development": <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  "Backend & Databases": <Server className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  "DevOps, Tools & Design": <Wrench className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
};

const AboutPage = () => {
  return (
    <div className="py-8 max-w-4xl space-y-20">
      {/* Intro Header */}
      <div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mb-6 font-mono">
          ABOUT ME
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
          I'm Kavin Kumar, a software developer with a strong focus on building responsive, high-performance web applications using the modern JavaScript and MERN ecosystem.
        </p>
      </div>

      {/* Profile & Biography */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-40 h-40 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shrink-0">
          <img
            src={myPhoto}
            alt="Kavin Kumar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
          <p>
            My journey into software development revolves around continuous learning and building. I enjoy turning complex business requirements into intuitive and aesthetic digital solutions.
          </p>
          <p>
            During my internship at <strong className="text-zinc-900 dark:text-white">Kovaion Consulting</strong>, I developed automated employee management modules, implemented cron jobs, and refined backend APIs for high reliability.
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white font-mono">
          WORK EXPERIENCE
        </h2>
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  {exp.badge || "Role"}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mt-1 mb-4">
                <span>{exp.company}</span>
                {exp.location && (
                  <>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </>
                )}
              </p>
              <ul className="space-y-2 mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 font-bold">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-white/5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white font-mono">
          SKILLS & TECHNOLOGIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5">
                  {categoryIcons[cat.category]}
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">
                  {cat.category}
                </h3>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className={`text-xs px-2.5 py-1 rounded-md border ${
                      s.highlight
                        ? "border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300"
                        : "border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* "Go to My Projects" Button with animated arrow */}
      <div className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 group transition-colors"
        >
          <span>Go to My Projects</span>
          <ArrowRight className="w-4 h-4 arrow-glide text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
