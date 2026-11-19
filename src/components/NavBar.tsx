import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Asterisk, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 w-full px-6 sm:px-12 lg:px-20 py-8 flex items-center justify-between">
      {/* Brand Logo: Asterisk icon matching Codewonders */}
      <Link
        to="/"
        className="group flex items-center gap-2 text-zinc-900 dark:text-white transition-transform hover:rotate-90 duration-500"
        aria-label="Home"
      >
        <Asterisk className="w-8 h-8 stroke-[2.5]" />
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `text-sm font-medium tracking-wide transition-colors ${
                isActive
                  ? "text-zinc-950 dark:text-white font-semibold underline underline-offset-8 decoration-2 decoration-zinc-900 dark:decoration-white"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}

        {/* Theme Toggle */}
        <ThemeToggle />
      </nav>

      {/* Mobile Menu & Theme Toggle */}
      <div className="flex md:hidden items-center gap-4">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 text-zinc-900 dark:text-white"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mx-6 mt-2 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium py-1 transition-colors ${
                  isActive
                    ? "text-zinc-950 dark:text-white font-bold"
                    : "text-zinc-600 dark:text-zinc-400"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;
