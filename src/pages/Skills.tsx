// src/pages/Skills.tsx
import React from "react";
import "../styles/PageStyles.css";

const Skills: React.FC = () => {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Skills & Expertise</h1>
        <p>
          A comprehensive overview of my technical proficiencies, tools, and
          platforms mastered to deliver exceptional support and solutions.
        </p>
      </header>

      <section className="section-spacing">
        <h2>Technical & Software Skills</h2>
        <ul className="ul-disc">
          <li>
            WordPress & WooCommerce — Plugin troubleshooting, payment
            integrations, and performance optimization
          </li>
          <li>
            HTML, CSS, JavaScript — Web technologies and browser DevTools for
            debugging and enhancements
          </li>
          <li>
            Git & GitHub — Version control, collaboration, and code review
          </li>
          <li>
            Zendesk, CA Unicenter Service Desk — Customer support and ticketing
            systems expertise
          </li>
          <li>
            Confluence, JIRA — Documentation, project tracking, and agile
            workflows
          </li>
          <li>
            Networking & Internet Concepts — DNS, SSL, hosting, domain
            management
          </li>
          <li>
            Office Productivity — Microsoft Office (Word, Excel, PowerPoint), G
            Suite (Docs, Sheets, Slides)
          </li>
          <li>Operating Systems — Windows 7/8/10, macOS</li>
        </ul>
      </section>

      <section className="section-spacing">
        <h2>Professional Skills & Attributes</h2>
        <ul className="ul-disc">
          <li>
            Customer Success & Technical Support — Complex issue resolution and
            relationship management
          </li>
          <li>
            Strong Analytical & Problem-Solving Abilities — Diagnosing and
            troubleshooting diverse technical challenges
          </li>
          <li>
            Documentation & Training — Creating clear guides, FAQs, and
            onboarding materials
          </li>
          <li>
            Effective Communication — Collaborating cross-functionally with
            teams and clients
          </li>
          <li>
            Adaptability & Continuous Learning — Quickly mastering new tools and
            industry trends
          </li>
          <li>
            Time Management & Multitasking — Handling high volume support
            efficiently
          </li>
        </ul>
      </section>

      <footer>
        <a href="/" className="cta-button">
          Back to Home
        </a>
      </footer>
    </main>
  );
};

export default Skills;
