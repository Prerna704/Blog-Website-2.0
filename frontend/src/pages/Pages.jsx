import React from "react";
import { Link } from "react-router-dom";

export default function Pages() {
  const pages = [
    {
      title: "Privacy Policy",
      description: "Learn how we protect your data and privacy.",
      icon: "Privacy",
      to: "/privacy-policy",
    },
    {
      title: "Terms of Service",
      description: "Read our terms and conditions for using the platform.",
      icon: "Terms",
      to: "/terms-of-service",
    },
    {
      title: "Help Center",
      description: "Find answers to frequently asked questions.",
      icon: "Help",
      to: "/help-center",
    },
    {
      title: "Community Guidelines",
      description: "Understand our community standards and rules.",
      icon: "Guide",
      to: "/community-guidelines",
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers.",
      icon: "API",
      to: "/api-documentation",
    },
    {
      title: "Careers",
      description: "Join our team and help build the future.",
      icon: "Jobs",
      to: "/careers",
    },
  ];

  return (
    <div className="min-h-screen bg-luxBg text-luxText">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-luxHeading mb-4">Pages</h1>
          <p className="text-xl text-luxMuted max-w-2xl mx-auto">
            Explore all the important pages and resources available on MediumLite.
            Find what you need quickly and easily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page, index) => (
            <Link
              key={index}
              to={page.to}
              className="bg-luxSurface border border-luxBorder rounded-2xl p-8 hover:border-luxAccent transition cursor-pointer group"
            >
              <div className="text-xl font-semibold mb-4 text-luxAccent">{page.icon}</div>
              <h3 className="text-xl font-semibold text-luxHeading mb-3 group-hover:text-luxAccent transition">
                {page.title}
              </h3>
              <p className="text-luxMuted">{page.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-luxSurface border border-luxBorder rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-luxHeading mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-luxHeading mb-3">For Writers</h3>
              <ul className="space-y-2 text-luxMuted">
                <li><Link to="/create" className="hover:text-luxAccent transition">- Writing Guidelines</Link></li>
                <li><Link to="/create" className="hover:text-luxAccent transition">- Monetization Options</Link></li>
                <li><Link to="/blog" className="hover:text-luxAccent transition">- Editorial Calendar</Link></li>
                <li><Link to="/contact" className="hover:text-luxAccent transition">- Partner Program</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-luxHeading mb-3">For Readers</h3>
              <ul className="space-y-2 text-luxMuted">
                <li><Link to="/blog" className="hover:text-luxAccent transition">- Reading Lists</Link></li>
                <li><Link to="/contact" className="hover:text-luxAccent transition">- Newsletter Signup</Link></li>
                <li><Link to="/my-blogs" className="hover:text-luxAccent transition">- Bookmarks</Link></li>
                <li><Link to="/blog" className="hover:text-luxAccent transition">- Following Authors</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
