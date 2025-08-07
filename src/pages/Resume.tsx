// src/pages/Resume.tsx
import React from "react";
import "../styles/PageStyles.css";

const Resume: React.FC = () => {
  return (
    <main className="page-container">
      {/* Page Header */}
      <header className="page-header">
        <h1>Resume</h1>
        <p>
          A detailed overview of my professional experience, skills, education,
          and certifications.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          style={{ marginTop: "1rem" }}
        >
          Download Resume (PDF)
        </a>
      </header>

      {/* Professional Experience */}
      <section className="section-spacing">
        <h2>Professional Experience</h2>

        <article className="experience-article">
          <h3>Customer Success & Support Specialist</h3>
          <p style={{ fontWeight: "600", marginBottom: "0.2rem" }}>
            WordPress.com & WooCommerce Support – Remote | 2018 – Present
          </p>
          <ul className="ul-disc">
            <li>
              Resolved complex WooCommerce plugin and payment gateway issues,
              achieving high customer satisfaction.
            </li>
            <li>
              Managed large volume of technical inquiries via Zendesk and live
              chat.
            </li>
            <li>
              Collaborated with product and engineering teams to escalate bugs
              and improve support documentation.
            </li>
            <li>
              Created onboarding materials to reduce new hire ramp-up time.
            </li>
          </ul>
        </article>

        <article className="experience-article">
          <h3>Technical Support Engineer</h3>
          <p style={{ fontWeight: "600", marginBottom: "0.2rem" }}>
            Freelance & Contract – Remote | 2015 – 2018
          </p>
          <ul className="ul-disc">
            <li>
              Customized WordPress and WooCommerce plugins and provided hosting
              and deployment guidance.
            </li>
            <li>
              Authored training guides for clients to better manage their
              platforms.
            </li>
          </ul>
        </article>

        <article className="experience-article">
          <h3>Support Engineer & Happiness Specialist</h3>
          <p style={{ fontWeight: "600", marginBottom: "0.2rem" }}>
            Various SaaS & IT Companies – Hyderabad, India | 2013 – 2015
          </p>
          <ul className="ul-disc">
            <li>
              Provided customer service and technical support, improving
              resolution efficiency and customer satisfaction.
            </li>
            <li>
              Developed team coaching programs and knowledge base articles.
            </li>
          </ul>
        </article>
      </section>

      {/* Skills */}
      <section className="section-spacing">
        <h2>Skills</h2>
        <ul className="ul-disc">
          <li>
            WordPress & WooCommerce (plugin troubleshooting, payment
            integrations)
          </li>
          <li>Zendesk, CA Unicenter Service Desk, JIRA, Confluence</li>
          <li>HTML, CSS, JavaScript, Git & GitHub</li>
          <li>Networking concepts, DNS, SSL, web hosting management</li>
          <li>Technical documentation, training, and user onboarding</li>
          <li>
            Customer relationship management and support process improvement
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="section-spacing">
        <h2>Education</h2>
        <p>
          <strong>MBA - International Business</strong>, Indian Institute of
          Foreign Trade (IIFT), New Delhi (2010 – 2012)
        </p>
        <p>
          <strong>B.E. Mechanical Engineering</strong>, Vishwakarma Institute of
          Technology (VIT), Pune University (1997 – 2001)
        </p>
      </section>

      {/* Certifications */}
      <section className="section-spacing">
        <h2>Certifications</h2>
        <ul className="ul-disc">
          <li>ITIL v3 Foundation</li>
          <li>HDI Support Center Team Lead (SCTL)</li>
          <li>HDI Support Center Manager (SCM)</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="section-spacing">
        <h2>Contact</h2>
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
            https://linkedin.com/in/riyazblog
          </a>
        </p>
      </section>

      <footer>
        <a href="/" className="cta-button">
          Back to Home
        </a>
      </footer>
    </main>
  );
};

export default Resume;
