import { useEffect } from "react";
import useThemeStore from "../stores/theme";
import { FaMoon } from "react-icons/fa6";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="bg-main-dark/85 relative h-6 w-12 rounded-full transition-colors dark:bg-neutral-700/90"
    >
      <div
        className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 transform rounded-full bg-green-500 transition-all duration-300 ${
          isDarkMode ? "opacity-0" : "translate-x-6 opacity-100"
        }`}
      />

      <div
        className={`absolute top-1/2 -translate-y-1/2 transform transition-all duration-300 ${
          isDarkMode ? "translate-x-0" : "translate-x-6"
        }`}
      >
        {isDarkMode && <FaMoon className="text-xl text-neutral-100/55" />}
      </div>
    </button>
  );
};

export default ThemeToggle;
