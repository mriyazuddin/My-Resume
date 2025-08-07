import React, { useState, useEffect, ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaWordpress } from "react-icons/fa";

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

  // Scroll to top on route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="layout-container">
      {/* Sidebar */}
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
            alt="Your Name"
            className="profile-pic"
            draggable={false}
          />
          {/* Name moved to top bar */}
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

      {/* Main content */}
      <main className="main-content">
        <header className="top-bar">
          {/* Left side: the name */}
          <div className="top-bar-left">
            <h1 className="user-name">Your Name</h1>
          </div>

          {/* Right side: contact info, socials, toggle */}
          <div className="top-bar-content">
            <div className="contact-info">
              <span className="phone">📞 +1-234-567-8901</span>
              <span className="email">✉️ your.email@example.com</span>
            </div>
            <div className="social-links">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://yourwordpressblog.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WordPress"
                className="social-icon"
              >
                <FaWordpress />
              </a>
            </div>
            <button
              className="theme-toggle"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              type="button"
            >
              {theme === "light" ? "🌞" : "🌙"}
            </button>
          </div>
        </header>

        {/* AnimatePresence with fade-only page transitions */}
        <AnimatePresence mode="wait">
          <motion.section
            key={location.pathname}
            className="page-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.section>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;
