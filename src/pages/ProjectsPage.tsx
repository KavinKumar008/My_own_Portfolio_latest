import { projectsData } from "../data/projects";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <div className="py-8 max-w-5xl space-y-16">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mb-4 font-mono">
          PROJECTS
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
          A collection of freelance platforms, full-stack applications, and developer tools built with React, Next JS, Node.js, and TypeScript.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-10">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center p-6 sm:p-8 rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-sm group hover:border-zinc-300 dark:hover:border-white/20 transition-all`}
            >
              {/* Preview Image */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-950 aspect-video relative group/img">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Project Meta */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
                          t === "Freelance"
                            ? "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                            : t === "Featured"
                            ? "border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300"
                            : "border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-zinc-950 dark:text-white mb-3">
                    {project.title}
                  </h2>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-white/5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold text-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 font-semibold text-xs hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* "Let's Go to My Resume" Button with animated arrow */}
      <div className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <Link
          to="/resume"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-zinc-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 group transition-colors"
        >
          <span>Let's Go to My Resume</span>
          <ArrowRight className="w-4 h-4 arrow-glide text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsPage;
