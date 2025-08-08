import React, { useState, useEffect, ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaWordpress } from "react-icons/fa";
import ThemeToggleBtn from "../components/ThemeToggleBtn"; // Import your toggle button

type LayoutProps = {
  children?: ReactNode;
};

const sidebarVariants = {
  collapsed: { width: 60, transition: { duration: 0.3, ease: "easeInOut" } },
  expanded: { width: 210, transition: { duration: 0.3, ease: "easeInOut" } },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const { theme } = useTheme(); // No need to destructure toggleTheme here anymore
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
            alt="Mohammed Riyazuddin"
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

          {/* Blog NavLink is commented out */}
          {/*
          <NavLink to="/blog" title="Blog" className={({ isActive }) => (isActive ? "active" : "")}>
            <span className="icon" aria-hidden="true">📝</span>
            <span className="label">Blog</span>
          </NavLink>
          */}
        </nav>
      </motion.aside>

      {/* Main content */}
      <main className="main-content">
        <header className="top-bar">
          {/* Left side: the name */}
          <div className="top-bar-left">
            <h1 className="user-name">Mohammed Riyazuddin</h1>
          </div>

          {/* Right side: contact info, socials, toggle */}
          <div className="top-bar-content">
            <div className="contact-info">
              <span className="phone">📞 +91-863-922-7538</span>
              <span className="email">✉️ contact@riyaz.blog</span>
            </div>
            <div className="social-links">
              <a
                href="https://linkedin.com/in/mriyazuddin1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mriyazuddin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://profiles.wordpress.org/mriyazuddin1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WordPress.org"
                className="social-icon"
              >
                <FaWordpress />
              </a>
            </div>
            {/* Replace the inline toggle button with imported toggle component */}
            <ThemeToggleBtn />
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
