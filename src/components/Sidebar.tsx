import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const sidebarVariants = {
  collapsed: { width: 60, transition: { duration: 0.3, ease: "easeInOut" } },
  expanded: { width: 220, transition: { duration: 0.3, ease: "easeInOut" } },
};

type SidebarProps = {
  expanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
};

const SidebarNavItem: React.FC<{
  to: string;
  icon: React.ReactNode;
  label: string;
  title: string;
}> = ({ to, icon, label, title }) => (
  <NavLink
    to={to}
    title={title}
    className={({ isActive }) => (isActive ? "active" : "")}
  >
    <span className="icon" aria-hidden="true">
      {icon}
    </span>
    <span className="label">{label}</span>
  </NavLink>
);

const Sidebar: React.FC<SidebarProps> = ({
  expanded,
  onExpand,
  onCollapse,
}) => {
  return (
    <motion.aside
      className={`sidebar ${expanded ? "expanded" : "collapsed"}`}
      onMouseEnter={onExpand}
      onMouseLeave={onCollapse}
      variants={sidebarVariants}
      initial="collapsed"
      animate={expanded ? "expanded" : "collapsed"}
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

      <nav className="sidebar-nav" aria-label="Sidebar navigation">
        <SidebarNavItem to="/" icon="🏠" label="Home" title="Home" />
        <SidebarNavItem
          to="/experience"
          icon="💼"
          label="Experience"
          title="Experience"
        />
        <SidebarNavItem
          to="/certifications"
          icon="📜"
          label="Certifications"
          title="Certifications"
        />
        <SidebarNavItem
          to="/education"
          icon="🎓"
          label="Education"
          title="Education"
        />
        <SidebarNavItem to="/resume" icon="📄" label="Resume" title="Resume" />
        <SidebarNavItem to="/skills" icon="🛠️" label="Skills" title="Skills" />
        {/* Add Blog nav item here later */}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
