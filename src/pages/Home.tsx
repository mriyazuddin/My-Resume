// src/pages/Home.tsx
import React from "react";
import "../styles/PageStyles.css";

const Home: React.FC = () => {
  return (
    <main className="page-container">
      {/* Hero Section */}
      <section className="page-header">
        <h1>
          Hi, I'm Riyaz — Experienced Technical Support Specialist &
          WordPress/WooCommerce Expert
        </h1>
        <p>
          Over 18 years of success delivering customer satisfaction,
          troubleshooting complex platform issues, and improving digital support
          processes.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Download Resume
          </a>
          <a href="#contact" className="cta-button">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Me */}
      <section className="section-spacing">
        <h2>About Me</h2>
        <p>
          I am a Customer Success and Technical Support professional with a
          strong focus on WordPress and WooCommerce platforms. Bringing more
          than 18 years of experience solving technical challenges, optimizing
          product adoption, and elevating user support experiences.
        </p>
        <ul className="ul-disc">
          <li>
            Over 5 years of dedicated customer success and technical support
            experience in SaaS platforms
          </li>
          <li>
            Skilled in troubleshooting WooCommerce plugins, payment gateway
            integrations (Stripe, PayPal), and synchronization tools
          </li>
          <li>
            Proven track record improving onboarding and training materials to
            enhance team capabilities
          </li>
          <li>
            Passionate about simplifying technical concepts, improving
            documentation, and driving process improvements
          </li>
        </ul>
      </section>

      {/* Skills & Technologies */}
      <section className="section-spacing">
        <h2>Skills & Technologies</h2>
        <p>
          WordPress, WooCommerce, HTML, CSS, JavaScript APIs, Zendesk, Browser
          DevTools, DNS & Hosting management, Git & GitHub, Technical
          documentation, training, debugging, and problem-solving.
        </p>
      </section>

      {/* Experience Highlights */}
      <section className="section-spacing">
        <h2>Experience Highlights</h2>
        <ul className="ul-disc">
          <li>
            Resolved complex customer inquiries and technical issues for
            WordPress.com and WooCommerce via Zendesk and live chat, boosting
            user satisfaction.
          </li>
          <li>
            Spearheaded troubleshooting and optimization of WooCommerce plugins
            including advanced payment and booking modules.
          </li>
          <li>
            Enhanced onboarding experience with revamped training materials,
            contributing to successful new hire ramp-up.
          </li>
          <li>
            Led documentation overhaul projects improving accessibility of over
            100 customer-facing guides.
          </li>
        </ul>
        <a
          href="/experience"
          className="cta-button"
          style={{ marginTop: "1rem", display: "inline-block" }}
        >
          View Full Experience
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing">
        <h2>Contact Me</h2>
        <p>
          Email: <a href="mailto:riyaz15@gmail.com">riyaz15@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+919000102810">+91 900-010-2810</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/riyazblog"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/riyazblog
          </a>
        </p>
      </section>

      {/* Blog Section */}
      <section className="section-spacing">
        <h2>Continuous Learning</h2>
        <p>
          I regularly share insights and tutorials on my{" "}
          <a
            href="https://riyaz.blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog
          </a>
          , demonstrating my commitment to ongoing growth and knowledge sharing.
        </p>
      </section>
    </main>
  );
};

export default Home;
