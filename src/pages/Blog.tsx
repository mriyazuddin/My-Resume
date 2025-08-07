// src/pages/Blog.tsx
import React from "react";
import "../styles/PageStyles.css";

const Blog: React.FC = () => {
  // Placeholder blog posts; replace with actual data or integration
  const blogPosts = [
    {
      id: 1,
      title: "Leveraging WooCommerce for Seamless Payment Integration",
      date: "2024-06-10",
      summary:
        "A deep dive into setting up WooCommerce with Stripe and PayPal payment gateways for optimal e-commerce transactions.",
      url: "/blog/woocommerce-payment-integration",
    },
    {
      id: 2,
      title: "Top Troubleshooting Tips for WordPress Plugin Conflicts",
      date: "2024-03-25",
      summary:
        "An actionable guide to diagnose and resolve common WordPress plugin conflicts to keep your site running smoothly.",
      url: "/blog/wordpress-plugin-troubleshooting",
    },
    {
      id: 3,
      title: "Improving Customer Support Efficiency in SaaS Platforms",
      date: "2023-12-15",
      summary:
        "Strategies and tools to streamline support workflows, improve resolution times, and enhance customer satisfaction in SaaS businesses.",
      url: "/blog/customer-support-efficiency",
    },
  ];

  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Blog</h1>
        <p>
          Insights, tutorials, and thought leadership on WordPress, WooCommerce,
          customer support, and more.
        </p>
      </header>

      <section>
        {blogPosts.length === 0 && (
          <p>No blog posts yet. Stay tuned for upcoming articles!</p>
        )}

        <ul className="ul-none">
          {blogPosts.map((post) => (
            <li
              key={post.id}
              style={{
                marginBottom: "2rem",
                borderBottom: "1px solid #ddd",
                paddingBottom: "1rem",
              }}
            >
              <article>
                <h2 style={{ marginBottom: "0.25rem" }}>
                  <a href={post.url} className="cta-link">
                    {post.title}
                  </a>
                </h2>
                <time
                  dateTime={post.date}
                  style={{ color: "#999", fontSize: "0.9rem" }}
                >
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <p style={{ marginTop: "0.5rem" }}>{post.summary}</p>
              </article>
            </li>
          ))}
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

export default Blog;
