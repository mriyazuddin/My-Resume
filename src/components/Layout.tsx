import React, { useState, ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

type LayoutProps = {
  children?: ReactNode;
};

const sidebarVariants = {
  collapsed: { width: 60, transition: { duration: 0.3, ease: "easeInOut" } },
  expanded: { width: 210, transition: { duration: 0.3, ease: "easeInOut" } },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <div className="layout-container">
      {/* Animated sidebar width */}
      <motion.aside
        className={`sidebar ${sidebarExpanded ? "expanded" : "collapsed"}`}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
        variants={sidebarVariants}
        initial="collapsed"
        animate={sidebarExpanded ? "expanded" : "collapsed"}
      >
        <div className="sidebar-header">
          <img
            src="/src/assets/images/profile.jpg"
            alt="Mohammed Riyazuddin"
            className="profile-pic"
            draggable={false}
          />
          {sidebarExpanded && <h2>Mohammed Riyazuddin</h2>}
        </div>

        <nav className="sidebar-nav">
          <NavLink
            to="/"
            title="Home"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="icon" aria-hidden="true">
              🏠
            </span>
            <span className="label">Home</span>
          </NavLink>

          <NavLink
            to="/experience"
            title="Experience"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="icon" aria-hidden="true">
              💼
            </span>
            <span className="label">Experience</span>
          </NavLink>

          <NavLink
            to="/certifications"
            title="Certifications"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="icon" aria-hidden="true">
              📜
            </span>
            <span className="label">Certifications</span>
          </NavLink>

          <NavLink
            to="/education"
            title="Education"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="icon" aria-hidden="true">
              🎓
            </span>
            <span className="label">Education</span>
          </NavLink>

          <NavLink
            to="/resume"
            title="Resume"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="icon" aria-hidden="true">
              📄
            </span>
            <span className="label">Resume</span>
          </NavLink>

          <NavLink
            to="/skills"
            title="Skills"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="icon" aria-hidden="true">
              🛠️
            </span>
            <span className="label">Skills</span>
          </NavLink>

          <NavLink
            to="/blog"
            title="Blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="icon" aria-hidden="true">
              📝
            </span>
            <span className="label">Blog</span>
          </NavLink>
        </nav>
      </motion.aside>

      <main className="main-content">
        <header className="top-bar">
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            type="button"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
        </header>

        <motion.section
          key={location.pathname}
          className="page-content"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.section>
      </main>
    </div>
  );
};

export default Layout;
