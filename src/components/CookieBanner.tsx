import React, { useState, useEffect } from "react";

const COOKIE_NAME = "cookiesAccepted";

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // On mount, check if user already accepted cookies
  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_NAME);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  // Handle user accepting cookies
  const acceptCookies = () => {
    localStorage.setItem(COOKIE_NAME, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="alertdialog"
      aria-live="polite"
      aria-label="Cookies disclaimer"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "var(--topbar-bg)",
        color: "var(--text-color)",
        padding: "1rem 1.5rem",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.2)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 150,
        fontSize: "0.9rem",
      }}
    >
      <div>
        This website uses cookies to ensure you get the best experience.{" "}
        <a
          href="/privacy-policy"
          style={{ color: "var(--accent-color)", textDecoration: "underline" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
      <button
        onClick={acceptCookies}
        style={{
          backgroundColor: "var(--accent-color)",
          color: "var(--button-text-color)",
          border: "none",
          borderRadius: 4,
          padding: "0.4rem 1rem",
          cursor: "pointer",
          fontWeight: "600",
          marginLeft: "1rem",
        }}
        aria-label="Accept cookies"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
