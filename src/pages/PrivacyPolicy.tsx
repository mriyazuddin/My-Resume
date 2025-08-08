import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main
      className="privacy-policy-container"
      style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1>Privacy & Cookie Policy</h1>

      <section>
        <h2>Cookies We Use</h2>
        <p>
          This website uses essential cookies necessary to operate the site
          properly. In addition, we use cookies to remember your preferred color
          theme (light or dark mode) to enhance your browsing experience.
        </p>
      </section>

      <section>
        <h2>Essential Cookies</h2>
        <p>
          Essential cookies enable basic functions such as page navigation and
          access to secure areas of the website. Without these cookies, the
          website cannot function properly.
        </p>
      </section>

      <section>
        <h2>Preference Cookies</h2>
        <p>
          Preference cookies store your chosen color theme to ensure the website
          appearance remains consistent during your visits.
        </p>
      </section>

      <section>
        <h2>Managing Cookies</h2>
        <p>
          You can control or delete cookies via your browser settings. Please
          note that disabling essential cookies may affect the website’s
          functionality. Deleting preference cookies will reset your theme
          preference to the default setting.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions regarding our cookie usage or privacy
          practices, please contact us at{" "}
          <a href="mailto:contact@riyaz.blog">contact@riyaz.blog</a>.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
