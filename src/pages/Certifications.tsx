// src/pages/Certifications.tsx
import React from "react";
import "../styles/PageStyles.css";

const Certifications: React.FC = () => {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Certifications</h1>
        <p>
          Professional certifications demonstrating my commitment to developing
          expertise in customer support, IT service management, and team
          leadership.
        </p>
      </header>

      <section className="section-spacing">
        <ul className="ul-none">
          <li style={{ marginBottom: "1rem" }}>
            <strong>ITIL v3 Foundation</strong>
            <p>Certified in IT Service Management Best Practices.</p>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>HDI – Support Center Team Lead (SCTL)</strong>
            <p>
              Certification for managing and leading technical support teams
              effectively.
            </p>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>HDI – Support Center Manager (SCM)</strong>
            <p>
              Advanced certification for overseeing and improving support center
              operations.
            </p>
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

export default Certifications;
