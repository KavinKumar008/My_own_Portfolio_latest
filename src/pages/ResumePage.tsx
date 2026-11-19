import { Link } from "react-router-dom";
import resumeImg from "../assets/Resume_screenshot.png";
import { personalInfo } from "../data/personal";

const ResumePage = () => {
  return (
    <div className="relative py-8 max-w-5xl space-y-8">
      {/* Background Watermark matching Codewonders */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-12 top-1/3 -translate-y-1/2 -rotate-90 text-[140px] md:text-[200px] font-black uppercase text-zinc-950/[0.03] dark:text-white/[0.03] select-none font-mono -z-10"
      >
        Resumé
      </div>

      {/* Main Title */}
      <div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-950 dark:text-white font-mono">
          Resumé.
        </h1>
        {/* Editorial Subtext with interactive triggers */}
        <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Reach out to me via my{" "}
          <Link
            to="/contact"
            className="font-bold text-zinc-950 dark:text-white underline decoration-1 underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            contact page
          </Link>{" "}
          .{" "}
          <a
            href={resumeImg}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-zinc-950 dark:text-white underline decoration-1 underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            view
          </a>{" "}
          or{" "}
          <a
            href={resumeImg}
            download={`Kavin_Kumar_Resume.png`}
            className="font-bold text-zinc-950 dark:text-white underline decoration-1 underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            download
          </a>{" "}
          the resume
        </p>
      </div>

      {/* Resume Presentation Frame matching Codewonders screenshot */}
      <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900/60 shadow-2xl overflow-hidden backdrop-blur-sm">
        {/* Top Accent Strip */}
        <div className="h-3 w-full bg-zinc-900 dark:bg-white" />

        {/* Resume Image / Sheet Container */}
        <div className="p-4 sm:p-8 bg-zinc-950 flex justify-center">
          <img
            src={resumeImg}
            alt={`${personalInfo.name} Resume`}
            className="w-full max-w-4xl rounded-lg shadow-xl object-contain border border-zinc-800"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
