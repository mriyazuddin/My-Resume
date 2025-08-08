import React from "react";
import { useTheme } from "../context/ThemeContext";
import darkModeImage from "../assets/images/DarkMode.png";
import lightModeImage from "../assets/images/LightMode.png";

const ThemeToggleBtn: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const imgStyle = { width: "50px", height: "30px" };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      <img
        src={theme === "light" ? darkModeImage : lightModeImage}
        alt="Toggle theme"
        style={imgStyle}
      />
    </button>
  );
};

export default ThemeToggleBtn;
