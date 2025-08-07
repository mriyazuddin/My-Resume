// src/pages/Education.tsx
import React from "react";
import "../styles/PageStyles.css";

const Education: React.FC = () => {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Education</h1>
        <p>
          Academic qualifications and certifications underpinning my technical
          expertise and professional growth.
        </p>
      </header>

      <section className="section-spacing">
        <article>
          <header>
            <h2>
              Master of Business Administration (MBA) - International Business
            </h2>
            <p style={{ fontWeight: 600 }}>
              Indian Institute of Foreign Trade (IIFT), New Delhi
            </p>
            <time dateTime="2010">2010 – 2012</time>
          </header>
          <p>
            Specialized in international business strategies, cross-border
            trade, and global market dynamics to complement my technical career
            with strong managerial skills.
          </p>
        </article>
      </section>

      <section className="section-spacing">
        <article>
          <header>
            <h2>Bachelor of Engineering (B.E.) – Mechanical Engineering</h2>
            <p style={{ fontWeight: 600 }}>
              Vishwakarma Institute of Technology (VIT), Pune University
            </p>
            <time dateTime="2001">1997 – 2001</time>
          </header>
          <p>
            Studied core principles of mechanical engineering with a focus on
            problem solving, systems thinking, and technical design.
          </p>
        </article>
      </section>

      <footer>
        <a href="/" className="cta-button">
          Back to Home
        </a>
      </footer>
    </main>
  );
};

export default Education;
