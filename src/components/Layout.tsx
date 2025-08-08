import React, { useState, useEffect, ReactNode, CSSProperties } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import CookieBanner from "./CookieBanner";

type LayoutProps = {
  children?: ReactNode;
};

const SIDEBAR_COLLAPSED_WIDTH = 60;
const SIDEBAR_EXPANDED_WIDTH = 220;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const sidebarWidth = sidebarExpanded
    ? SIDEBAR_EXPANDED_WIDTH
    : SIDEBAR_COLLAPSED_WIDTH;

  // Dynamic styles for top bar positioning and width
  const topBarStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: sidebarWidth,
    width: `calc(100vw - ${sidebarWidth}px - 35px)`,
    height: "70px",
    transition: "left 0.3s ease, width 0.3s ease",
    zIndex: 100,
  };

  // Dynamic style for main content margin to avoid sidebar overlap
  const mainContentStyle: CSSProperties = {
    // marginLeft: sidebarWidth,
    marginLeft: "auto",
    paddingTop: "70px", // to avoid content behind top bar
    transition: "margin-left 0.3s ease",
    height: `calc(100vh - 70px)`,
    overflowY: "auto",
  };

  return (
    <div className="layout-container">
      <Sidebar
        expanded={sidebarExpanded}
        onExpand={() => setSidebarExpanded(true)}
        onCollapse={() => setSidebarExpanded(false)}
      />

      <TopBar style={topBarStyle} />

      <main className="main-content" style={mainContentStyle}>
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
        <div className="layout-container">
          {/* Sidebar, TopBar, Main content etc */}

          {/* {children} */}

          {/* Cookie banner */}
          <CookieBanner />
        </div>
      </main>
    </div>
  );
};

export default Layout;
