import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative w-6 h-6 rounded-full border border-zinc-900 dark:border-white transition-all overflow-hidden flex items-center justify-center ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Visual Eclipse / Half-filled circle representation */}
      <span
        className={`absolute inset-0 transition-transform duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-r from-white from-50% to-transparent to-50%"
            : "bg-gradient-to-r from-zinc-950 from-50% to-transparent to-50%"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
