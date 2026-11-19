import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { X } from "lucide-react";
import { personalInfo } from "../data/personal";

const Layout = () => {
  const [showSearchPrompt, setShowSearchPrompt] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#fafafa] dark:bg-[#0c0d0e] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      {/* Background Architectural Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="w-px h-full bg-zinc-200/50 dark:bg-zinc-800/40" />
        <div className="w-px h-full bg-zinc-200/50 dark:bg-zinc-800/40 hidden sm:block" />
        <div className="w-px h-full bg-zinc-200/50 dark:bg-zinc-800/40 hidden md:block" />
        <div className="w-px h-full bg-zinc-200/50 dark:bg-zinc-800/40 hidden lg:block" />
        <div className="w-px h-full bg-zinc-200/50 dark:bg-zinc-800/40 hidden xl:block" />
        <div className="w-px h-full bg-zinc-200/50 dark:bg-zinc-800/40" />
      </div>

      {/* Ambient background soft glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-pink-500/5 via-amber-500/5 to-blue-500/5 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-emerald-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Navigation */}
      <NavBar />

      {/* Main Page Outlet */}
      <main className="relative z-10 flex-grow px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full flex flex-col justify-center py-8">
        <Outlet />
      </main>

      {/* Bottom Sticky Bar: Social Links & Floating Search Pill */}
      <footer className="relative z-20 w-full px-6 sm:px-12 lg:px-20 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
        {/* Left Social Icons */}
        <div className="flex items-center gap-6 text-zinc-600 dark:text-zinc-400">
          <a
            href="https://github.com/KavinKumar008"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/kavin-kumar-s-r-564b0b2b8/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-4 h-4" />
          </a> */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <CiMail className="w-5 h-5 font-bold" />
          </a>
        </div>

        {/* Center Floating Ctrl+K Search Pill (Visible on Home / Desktop) */}
        {showSearchPrompt && isHome && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-2xl border border-zinc-800 dark:border-zinc-200 text-xs font-medium">
            <span>Use</span>
            <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-900 font-mono text-[11px]">
              Ctrl + K
            </kbd>
            <span>to trigger search</span>
            <button
              type="button"
              onClick={() => setShowSearchPrompt(false)}
              className="ml-2 hover:opacity-70 transition-opacity p-0.5"
              aria-label="Dismiss search hint"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Right Watermark / Copyright */}
        <div className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
          © {new Date().getFullYear()} Kavin Kumar
        </div>
      </footer>
    </div>
  );
};

export default Layout;
