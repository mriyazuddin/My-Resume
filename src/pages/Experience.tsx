// src/pages/Experience.tsx
import React from "react";
import "../styles/PageStyles.css";

const Experience: React.FC = () => {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Professional Experience</h1>
        <p>
          Over 5 years of success managing customer relationships, resolving
          complex platform issues, and driving product adoption in SaaS and
          digital platforms.
        </p>
      </header>

      {/* Experience Entry */}
      <section className="section-spacing">
        <article className="experience-article">
          <header>
            <h2>Customer Success & Support Specialist</h2>
            <p style={{ fontWeight: 600 }}>
              WordPress.com & WooCommerce Support – Remote
            </p>
            <time dateTime="2018-2023">2018 – Present</time>
          </header>
          <p>
            Delivering exceptional customer success and technical support,
            managing complex tickets and platform issues on WordPress and
            WooCommerce.
          </p>
          <ul className="ul-disc">
            <li>
              Expertly troubleshoot and resolve WooCommerce plugin issues,
              payment gateway integration (Stripe, PayPal), and synchronization
              tools.
            </li>
            <li>
              Handle high volumes of customer inquiries through Zendesk and live
              chat, contributing to improved user satisfaction and retention.
            </li>
            <li>
              Collaborate cross-functionally with engineering and product teams
              to report bugs and enhance support processes.
            </li>
            <li>
              Develop and maintain detailed technical documentation and
              onboarding materials to boost team performance and reduce
              resolution times.
            </li>
          </ul>
        </article>
      </section>

      <section className="section-spacing">
        <article className="experience-article">
          <header>
            <h2>Technical Support Engineer</h2>
            <p style={{ fontWeight: 600 }}>
              Freelance & Contract Roles – Remote
            </p>
            <time dateTime="2015-2018">2015 – 2018</time>
          </header>
          <p>
            Provided client-specific WordPress and WooCommerce support including
            troubleshooting, plugin customization, and hosting advice.
          </p>
          <ul className="ul-disc">
            <li>
              Developed solutions for plugin compatibility and custom payment
              workflows.
            </li>
            <li>
              Guided clients through DNS, web hosting setup, and deployment best
              practices.
            </li>
            <li>
              Authored training guides and documentation to empower clients to
              manage their platforms effectively.
            </li>
          </ul>
        </article>
      </section>

      <section className="section-spacing">
        <article className="experience-article">
          <header>
            <h2>Support Engineer & Happiness Specialist</h2>
            <p style={{ fontWeight: 600 }}>
              Various SaaS and IT Companies – Hyderabad, India
            </p>
            <time dateTime="2013-2015">2013 – 2015</time>
          </header>
          <p>
            Delivered frontline technical support and customer service across
            software and SaaS platforms, focusing on swift issue resolution and
            customer satisfaction.
          </p>
          <ul className="ul-disc">
            <li>
              Managed complex support tickets, enhancing resolution tactics and
              customer communications.
            </li>
            <li>
              Improved team performance by implementing informal coaching and
              performance strategies, reducing Average Handle Time (AHT).
            </li>
            <li>
              Created FAQs, knowledge base articles, and user guides to support
              customer self-service.
            </li>
          </ul>
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

export default Experience;
