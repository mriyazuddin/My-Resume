import React from "react";
import { FaLinkedin, FaGithub, FaWordpress } from "react-icons/fa";

const SocialLinks: React.FC = () => (
  <div className="social-links" aria-label="Social media links">
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
);

export default SocialLinks;
