import React from "react";
import { useTheme } from "../context/ThemeContext"; // adjust path as needed

const ThemeToggleBtn: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggleBtn;
